export default class ClinicalCaseService {
    constructor(resource) {
        this._resource = resource('clinicalCases{/id}{?q,p}');
    }

    get(id) {
        return this._resource.get({ id }).then(res => res.json());
    }

    listAll(page, query) {
        return this._resource.query({ p: page, q: query }).then(res => res.json());
    }
    listDoctor(doctor) {
        return this._resource.query({ doctor }).then(res => res.json());
    }

    save(patient, companion, clinicalType) {
        return this._resource.save({ clinicalType, patient, companion });
    }

    edit(patient, companion) {
        return this._resource.update({ patient, companion });
    }

    delete(id) {
        return this._resource.delete({ id });
    }
}