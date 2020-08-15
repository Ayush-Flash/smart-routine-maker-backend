const mongoose = require('mongoose');

const _url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0vmhn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }).then(() => console.log('Database Connection successful!'))
        .catch((err) => console.log(err))
    }
}

module.exports = new Database();

