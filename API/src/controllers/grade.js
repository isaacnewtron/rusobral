import mongoose from 'mongoose';

import { Grade } from '../models/grade';
import { MongoFactory } from '../database';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class GradeController {
    
    
    static list(req, res, next) {
        try {
             Grade
            .aggregate( [
                {
                    $group: { 
                        _id: '$menuId', 
                        value: { 
                            $avg: "$value"
                        }
                    }
                },
                { 
                    $project: {
                        _id: 0,
                        "id": "$_id",
                        value: 1
                    }
                }
            ])
            .exec()
            .then(grade => res.json(grade))
            .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static getGradesMenu(req, res, next) {
        try {
             Grade
            .aggregate([
                { 
                    $match : { 
                        "menuId": mongoose.Types.ObjectId(req.params.menu)
                    }
                },
                { 
                    $project: {
                        _id: 0,
                        "id": "$_id",
                        value: 1,
                        userId: 1,
                        menuId: 1,
                    }
                }
            ])
            .exec()
            .then(grade => res.json(grade))
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

    static put(req, res, next) {
        try {
            let id = req.params.id;
            let updatedGrade = req.body;
            Grade
                .findByIdAndUpdate(id, updatedGrade, { new: true })
                .exec()
                .then(item => res.json(item))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            Grade
                .findByIdAndRemove(req.params.id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

