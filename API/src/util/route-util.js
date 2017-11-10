export function isPublic(req) {
    return new RegExp('/api/auth').test(req.path) ||
        new RegExp('/api/users').test(req.path);
}