const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    username: String,
    password: String,

});

module.exports = mongoose.model('User', UserSchema);