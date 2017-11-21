import mongoose from 'mongoose';

import { Menu, mealFormate } from '../models/menu';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class MenuController {
    
    static getList(req, res, next) {
        try {
            Menu
                .aggregate(mealFormate)
                .exec()
                .then(menu => res.json(menu))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }
    
    static getMeal(req, res, next) {
        try {
            let filter = mealFormate
            filter.push(
                { 
                    $match : { 
                        "mealId": mongoose.Types.ObjectId(req.params.meal)
                    }
                }
            )
            Menu
            .aggregate(filter)
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

