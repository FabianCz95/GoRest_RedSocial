const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    post_id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true }
});

module.exports = mongoose.model('Comment', CommentSchema);