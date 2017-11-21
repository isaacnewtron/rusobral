import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;

const mealFormate = [
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
            },
            menuIds: { 
                $push:  "$_id"
            }
        }
    },
    { 
        $project: {
            _id: 0,
            "mealId": "$_id",
            "menuIds": 1,
            "itens" : {
                "id": "$_id",
                "name": 1,
                "description": 1
                }
            }
    }
]

let menuSchema = new mongoose.Schema({
    itemId: {
        type: Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    mealId: {
        type: Types.ObjectId,
        ref: 'Meal',
        required: true,
    }
});

menuSchema.set('toJSON', { 
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id
        delete  ret._id
    }
})

menuSchema.statics.findMenu = (query) => {
    return Menu.find(query)
        .populate
}

let Menu = mongoose.model('Menu', menuSchema);

export { Menu, mealFormate };