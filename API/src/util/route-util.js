export function isPublic(req) {
    return new RegExp('/api/auth').test(req.path)
}

export function isUserRouter(req) {
    return new RegExp('/api/user').test(req.path) && req.method == 'POST'
}