const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    user_id: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
});

module.exports = mongoose.model('Post', PostSchema);