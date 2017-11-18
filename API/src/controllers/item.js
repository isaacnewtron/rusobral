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
            let updatedUser = req.body;
            User
                .findById(id)
                .exec()
                .then(user => {
                    let restriction = user.hasSystemRestriction(updatedUser.role);
                    if(restriction) throw restriction;
                    return User.update({ _id: id }, updatedUser, { new: true });     
                })
                .then(user => res.json(user))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            let id = req.params.id;
            User
                .findById(id)
                .exec()
                .then(user => {
                    if(user.isDefaultAdmin()) throw new ExceptionFactory(EXCEPTION.CANNOT_DEACTIVE_DEFAULT_ADMIN);
                    return User.update({ _id: id }, { actived: false }, { new: true });  
                })
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

