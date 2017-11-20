import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;

const itemTypes = [
    'PRINCIPAL',
    'VEGETARIANO',
    'SALADA',
    'GUARNICAO',
    'ACOMPANHAMENTO',
    'SUCO',
    'SOBREMESA'
];

export const itemType = {
    PRINCIPAL:'PRINCIPAL',
    VEGETARIANO:'VEGETARIANO',
    SALADA:'SALADA',
    GUARNICAO:'GUARNICAO',
    ACOMPANHAMENTO:'ACOMPANHAMENTO',
    SUCO:'SUCO',
    SOBREMESA:'SOBREMESA'
};

let itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true   
    },
    description: {
        type: String   
    },
    type: {
        type: String,
        required: true,
        uppercase: true,
        enum: itemTypes,
    }
});

itemSchema.set('toJSON', { 
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id
        delete  ret._id
    }
})

let Item = mongoose.model('Item', itemSchema);

export { Item };