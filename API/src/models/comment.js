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

commentSchema.set('toJSON', { 
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id
        delete  ret._id
    }
})

let Comment = mongoose.model('Comment', commentSchema);

export { Comment };