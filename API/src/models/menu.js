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

let Menu = mongoose.model('Menu', menuSchema);

export { Menu };