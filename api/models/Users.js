const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
