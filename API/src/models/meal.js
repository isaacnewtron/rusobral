import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;

const mealTypes = [
    'LAUNCH',
    'DINNER'
];

export const mealType = {
    LAUNCH: 'LAUNCH',
    DINNER: 'DINNER'
};

let mealSchema = new mongoose.Schema({
    date: {
        type: Types.Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
        uppercase: true,
        enum: mealTypes,
    }
});

let Meal = mongoose.model('Meal', mealSchema);

export { Mea, mealType };