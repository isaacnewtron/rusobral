import mongoose from 'mongoose';

import { Comment } from '../models/comment';
import { MongoFactory } from '../database';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

export default class CommentController {
    

    static getCommentsMeal(req, res, next) {
        try {
             Comment
            .find({mealId: req.params.meal})
            .populate("userId")
            .exec()
            .then(Comment => res.json(Comment))
            .catch(next);
        } catch(e) {
            next(e);
        }
    }

    static post(req, res, next) {
        try {
            let comment = new Comment(req.body)
            comment
            .save()
            .then(comment => res.json(comment))
            .catch(next)     
        } catch(e) {
            next(e);
        }
    }

    static put(req, res, next) {
        try {
            let id = req.params.id;
            let updatedComment = req.body;
            Comment
                .findByIdAndUpdate(id, updatedComment, { new: true })
                .exec()
                .then(comment => res.json(comment))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            Comment
                .findByIdAndRemove(req.params.id)
                .exec()
                .then(() => res.sendStatus(200))
                .catch(next)
        } catch(e) {
            next(e);
        }
    }
}

