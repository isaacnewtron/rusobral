export default class QuestionService {
    constructor(resource) {
        this._resource = resource('questions{/id}{?clinicalID,full}');
        //TODO: Create the resource to active a question
    }

    get(id, clinicalID) {

        return this._resource.get({ id, clinicalID }).then(res => res.json());
    }

    listAll(clinicalID) {
        return this._resource.query({ clinicalID, full: true }).then(res => res.json());
    }

    save(question) {
        return this._resource.save(question);
    }

    edit(id, question) {
        return this._resource.update({ id }, question);
    }

    delete(id) {
        return this._resource.delete({ id });
    }
}