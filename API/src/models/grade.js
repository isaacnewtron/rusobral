import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;


let gradeSchema = new mongoose.Schema({
    value: {
        type: Number,
        require: true   
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    mealId: {
        type: Types.ObjectId,
        ref: 'Menu',
        required: true,
    }
});

let Grade = mongoose.model('Grade', gradeSchema);

export { Grade };