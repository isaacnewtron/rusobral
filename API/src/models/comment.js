import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;


let commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        require: true   
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    mealId: {
        type: Types.ObjectId,
        ref: 'Meal',
        required: true,
    }
});

let Comment = mongoose.model('Comment', commentSchema);

export { Comment };