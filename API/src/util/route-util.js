export function isPublic(req) {
    return new RegExp('/api/auth').test(req.path) 
}