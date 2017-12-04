export default class AnswerService {
    constructor(resource) {
        this._resource = resource('answers{/id}{?questionID,clinicalID}');
    }

    get(id, questionID, clinicalID) {
        return this._resource.get({ id, questionID, clinicalID }).then(res => res.json());
    }

    answer(answer, questionID, clinicalID) {
        if (answer.id) {
            let id = answer.id;
            return this._resource.update({ id, questionID, clinicalID }, answer);
        } else {
            return this._resource.save({ questionID, clinicalID }, answer);
        }
    }

    edit(answer, id, questionID, clinicalID) {
        return this._resource.update({ id, questionID, clinicalID }, answer);
    }
}