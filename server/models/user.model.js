const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
 firstName: String,
 lastName: String,
 username: String,
 emailAddress: String,
 password: String,
});


module.exports = mongoose.model('User', userSchema, 'User');