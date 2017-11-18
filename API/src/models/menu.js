import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;


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
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

menuSchema.statics.findMenu = (query) => {
    return Menu.find(query)
        .populate
}

let Menu = mongoose.model('Menu', menuSchema);

export { Menu };