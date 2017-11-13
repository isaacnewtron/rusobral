import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;


let optionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true   
    },
    description: {
        type: String,
        require: true   
    },
    pollId: {
        type: Types.ObjectId,
        ref: 'Poll',
        required: true,
    }
});

let Option = mongoose.model('Option', optionSchema);

export { Option };