const mongoose = require('mongoose');


const namesSchema= new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    budget:{
        type:Number,
        required:true
    },
    color: {
        type: String,
        required: true,
        trim:true,
        uppercase:true,
        validate: {
          validator: function (value) {
            return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
          },
          message: 'Invalid color format. Please use a valid hexadecimal color code.'
        }
    }
},{collection:'budget'});

module.exports = mongoose.model('budget',namesSchema)