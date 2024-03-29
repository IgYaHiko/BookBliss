let mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/BBDatabase");

const userSchema = new mongoose.Schema({
    username: {
       type: String,
       required: true,
       unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    
},{timestamps: true});

module.exports = mongoose.model('user', userSchema);