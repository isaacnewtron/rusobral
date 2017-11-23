import { Vote } from '../models/vote';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class VoteController {

    static getList(req, res, next) {
        try {
            let filter
            //req.query.type != undefined ? filter={type: req.query.type } : filter={}
            Vote
                .find({})
                .exec()
                .then(vote => res.json(vote))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static getOption(req, res, next) {
        try {
            Vote
                .find({optionId: req.params.option})
                .exec()
                .then(vote => res.json(vote))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static post(req, res, next) {
        try {
            let vote = new Vote(req.body);
            vote.save()
                .then(vote => res.json(vote))
                .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static put(req, res, next) {
        try {
            let id = req.params.id;
            let updatedVote = req.body;
            Vote
                .findByIdAndUpdate(id, updatedVote,{ new: true })
                .exec()
                .then(vote => res.json(vote))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            let id = req.params.id;
            Vote
                .findByIdAndRemove(id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

