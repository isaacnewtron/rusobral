export default class UserService {
    constructor(resource) {
        this._resource = resource('users{/id}{?q,p}');
    }

    get(id) {
        return this._resource.get({ id }).then(res => res.json());
    }

    listAll(page, query) {
        return this._resource.query({ p: page, q: query }).then(res => res.json());
    }

    save(user) {
        return this._resource.save(user);
    }

    edit(id, user) {
        return this._resource.update({ id }, user);
    }

    delete(id) {
        return this._resource.delete({ id });
    }
}