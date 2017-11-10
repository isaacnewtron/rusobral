'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPublic = isPublic;
function isPublic(req) {
    return new RegExp('/api/auth').test(req.path) || new RegExp('/api/users').test(req.path);
}