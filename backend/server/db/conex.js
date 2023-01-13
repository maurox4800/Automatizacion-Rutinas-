'use strict'
const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect(process.env.URI_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected!!')
    } catch (error) {
        console.log('Failed to connect to MongoDB!!', error);
    }
}
module.exports = connect()