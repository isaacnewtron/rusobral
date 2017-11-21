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
    menuId: {
        type: Types.ObjectId,
        ref: 'Menu',
        required: true,
    }
});

gradeSchema.set('toJSON', { 
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id
        delete  ret._id
    }
})

let Grade = mongoose.model('Grade', gradeSchema);

export { Grade };