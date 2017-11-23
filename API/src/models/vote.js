import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;


let voteSchema = new mongoose.Schema({
    value: {
        type: Number,
        require: true   
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    optionId: {
        type: Types.ObjectId,
        ref: 'Option',
        required: true,
    }
});

voteSchema.set('toJSON', { 
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id
        delete  ret._id
    }
})

let Vote = mongoose.model('Vote', voteSchema);

export { Vote };