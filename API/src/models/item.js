import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;

const itemTypes = [
    'LAUNCH',
    'DINNER'
];

export const itemType = {
    LAUNCH: 'LAUNCH',
    DINNER: 'DINNER'
};

let itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true   
    },
    description: {
        type: String,
        require: true   
    },
    type: {
        type: String,
        required: true,
        uppercase: true,
        enum: itemTypes,
    }
});

let Item = mongoose.model('Item', itemSchema);

export { Item };