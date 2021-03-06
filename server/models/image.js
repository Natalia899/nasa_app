const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    title: String,
    image: String,
    description: String,
    like: Boolean,
    likeButton: String
})

const Image = mongoose.model('image', imageSchema)
module.exports = Image