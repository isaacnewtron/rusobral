export default class CompanionService {
    constructor(resource) {
        this._resource = resource('companions{/id}{?q,p}');
    }

    get(id) {
        return this._resource.get({ id }).then(res => res.json());
    }

    listAll(page, query) {
        return this._resource.query({ p: page, q: query }).then(res => res.json());
    }

    save(companion) {
        return this._resource.save(companion);
    }

    edit(id, companion) {
        return this._resource.update({ id }, companion);
    }

    delete(id) {
        return this._resource.delete({ id });
    }
}