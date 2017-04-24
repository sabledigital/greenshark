var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/greenshark-dev');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  origin: String,
  created_at: { type: String, default: Date.now },
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
