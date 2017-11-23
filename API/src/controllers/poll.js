import { Poll } from '../models/poll';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class PollController {

    static getList(req, res, next) {
        try {
            let filter
            req.query.type != undefined ? filter={type: req.query.type } : filter={}
            Poll
                .find(filter)
                .exec()
                .then(user => res.json(user))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static getId(req, res, next) {
        try {
            Poll
                .findById(req.params.id)
                .exec()
                .then(user => res.json(user))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static post(req, res, next) {
        try {
            let poll = new Poll(req.body);
            poll.save()
                .then(poll => res.json(poll))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static put(req, res, next) {
        try {
            let id = req.params.id;
            let updatedPoll = req.body;
            Poll
                .findByIdAndUpdate(id, updatedPoll,{ new: true })
                .exec()
                .then(poll => res.json(poll))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            let id = req.params.id;
            Poll
                .findByIdAndRemove(id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

