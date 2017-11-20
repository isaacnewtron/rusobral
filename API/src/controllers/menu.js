import { Menu, mealFormate } from '../models/menu';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class MenuController {
    
    static getList(req, res, next) {
        try {
            Menu
                .aggregate([
                    {
                        $lookup:
                           {
                              from: "items",
                              localField: "itemId",
                              foreignField: "_id",
                              as: "itens"
                          }
                     },
                     {
                        $group: { 
                            _id: '$mealId', 
                            itens: { 
                                $push:  { $arrayElemAt: [ "$itens", 0 ] }
                            } 
                        }
                    },
                    { 
                        $project: {
                            _id: 0,
                            "mealId": "$_id",
                            "itens._id": 1,
                            "itens.name": 1,
                            "itens.description": 1
                        }
                     }
                ])
                .exec()
                .then(menu => res.json(menu))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static getMeal(req, res, next) {
        try {
            let filter
            filter = mealFormate
            filter.push({ $match: { _id: req.params.meal }}) 
            console.log( req.params.meal)
            Menu
            .aggregate([
                { "$match": { _id: req.params.meal }}
            ])
            .exec()
            .then(menu => res.json(menu))
            .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static post(req, res, next) {
        try {
            let menus = []
            for(let item of req.body.itens){
                let menu = {
                        itemId: item,
                        mealId: req.body.meal
                }
                menus.push(menu)
                
            }
            Menu.insertMany(menus)
            .then(menu => {
                res.json(menu)               
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
            Menu
                .remove(filter)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

