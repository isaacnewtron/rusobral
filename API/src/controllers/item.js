import { Item } from '../models/item';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class ItemController {

    static getList(req, res, next) {
        try {
            let filter
            req.query.type != undefined ? filter={type: req.query.type } : filter={}
            Item
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
            Item
                .findById(req.params.id)
                .exec()
                .then(user => res.json(user))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static getType(req, res, next) {
        try {
            Item
                .findById(req.params.type)
                .exec()
                .then(user => res.json(user))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static post(req, res, next) {
        try {
            let item = new Item(req.body);
            item.save()
                .then(item => res.json(item))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static put(req, res, next) {
        try {
            let id = req.params.id;
            let updatedItem = req.body;
            Item
                .findByIdAndUpdate(id, updatedItem,{ new: true })
                .exec()
                .then(item => res.json(item))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            let id = req.params.id;
            Item
                .findByIdAndRemove(id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

