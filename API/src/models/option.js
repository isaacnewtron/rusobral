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

optionSchema.set('toJSON', { 
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id
        delete  ret._id
    }
})

let Option = mongoose.model('Option', optionSchema);

export { Option };