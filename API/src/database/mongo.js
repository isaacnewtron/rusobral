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
        mongoose.connect(process.env.BD_CONNECTION,  { useMongoClient: true });
        this.instance = mongoose.connection;
    }
}