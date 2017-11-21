import { Grade } from '../models/grade';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class GradeController {
    
    static getList(req, res, next) {
        try {
            Grade
                .aggregate(mealFormate)
                .exec()
                .then(Grade => res.json(Grade))
                .catch(next);
        } catch(e) {

            next(e);
        }
    }
    
    static getMeal(req, res, next) {
        try {
             Grade
            .find({mealId: req.params.meal})
            .populate('itemId')
            .exec()
            .then(Grade => res.json(Grade))
            .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static post(req, res, next) {
        try {
            let grades = []
            for(let item of req.body.grades){
                let Grade = {
                        userId: item.userId,
                        menuId: item.menuId,
                        value: item.value
                }
                grades.push(Grade)
                
            }
            Grade.insertMany(grades)
            .then(grade => {
                res.json(grade)               
            })
            .catch(next);          
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            req.params.meal;
            let filter
            req.query.id != undefined ? filter = {mealId: req.params.meal, _id: req.query.id} : filter = {mealId: req.params.meal}
            Grade
                .remove(filter)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

