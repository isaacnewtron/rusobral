export default class OptionService {
    constructor(resource) {
        this._resource = resource('options{/id}');
    }

    edit(id, option) {
        return this._resource.update({ id }, option);
    }

    delete(id) {
        return this._resource.delete({ id });
    }
}