const mongoose = require('mongoose')

const modelSchema = mongoose.Schema({

    title : String,
    description : {type : String},
    cover : String
})

module.exports = mongoose.model('ModelName' , modelSchema)