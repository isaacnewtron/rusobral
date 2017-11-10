import mongoose from 'mongoose';

export class MongoFactory {

    constructor() {
        this.instance = null;
        this.connect();
    }

    static getInstance() {
        if(!this.instance) {
            this.connect();
        }
        return this.instance;
    }

    static connect() {
        mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://admin:admin.ru@ds249575.mlab.com:49575/heroku_415734f6`);
        this.instance = mongoose.connection;
    }
}