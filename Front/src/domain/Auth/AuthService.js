export default class AuthService {
    constructor(resource) {
        this._resource = resource('auth');
    }

    authenticate(username, password) {
        return this._resource.save({ username, password });
    }
}