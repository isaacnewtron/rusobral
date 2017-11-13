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

let Vote = mongoose.model('Vote', voteSchema);

export { Vote };