import { Meal } from '../models/meal';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class MealController {

    static getList(req, res, next) {
        try {
            let filter
            req.query.type != undefined ? filter={type: req.query.type } : filter={}
            Meal
                .find(filter)
                .exec()
                .then(meal => res.json(meal))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static getInterval(req, res, next) {
        try {
            let filter
            let interval = req.query.interval || 7
            let initialDate = new Date(req.params.date)
            let endDate = new Date(initialDate.getTime() + interval * 86400000 );
            req.params.date != undefined ? filter = {date: {$gte: initialDate , $lt: endDate}} : filter={}
            Meal
                .find(filter)
                .exec()
                .then(meal => res.json(meal))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static post(req, res, next) {
        try {
            let meal = new Meal(req.body);
            meal.save()
                .then(meal => res.json(meal))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            let id = req.params.id;
            Meal
                .findByIdAndRemove(id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

