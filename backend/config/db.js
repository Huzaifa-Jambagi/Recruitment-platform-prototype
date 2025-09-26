const mongoose = require('mongoose');

const connectDB = async (mongoURL) => {
    try {
        await mongoose.connect(mongoURL);
        console.log('connected to the DB succesfully');
        
    } catch (err) {
        console.log('MongoDB connection error', err);
        process.exit();
    }
}

module.exports = connectDB;