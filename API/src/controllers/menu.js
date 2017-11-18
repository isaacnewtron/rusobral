import { Menu } from '../models/menu';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class MenuController {

    static getList(req, res, next) {
        try {
            Menu
                .find({})
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
            req.params.meal != undefined ? filter = {meal:  req.params.meal} : filter={}
            Menu
                .find(filter)
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
                let menu = new Menu({
                        itemId: item,
                        mealId: req.body.meal
                })

                menu.save()
                .then(menu => {
                    //console.log(menu.toJSON())                    
                })
                .catch(next);
                menus.push(menu.toJSON())
            }
            res.json(menus)            
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

