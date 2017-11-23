import { Option } from '../models/option';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class OptionController {

    static getList(req, res, next) {
        try {
            let filter
            //req.query.type != undefined ? filter={type: req.query.type } : filter={}
            Option
                .find({})
                .exec()
                .then(opt => res.json(opt))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static getPoll(req, res, next) {
        try {
            Option
                .find({pollId: req.params.poll})
                .exec()
                .then(opt => res.json(opt))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static post(req, res, next) {
        try {
            let option = new Option(req.body);
            option.save()
                .then(opt => res.json(opt))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static put(req, res, next) {
        try {
            let id = req.params.id;
            let updatedOption = req.body;
            Option
                .findByIdAndUpdate(id, updatedOption,{ new: true })
                .exec()
                .then(opt => res.json(opt))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            let id = req.params.id;
            Option
                .findByIdAndRemove(id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

