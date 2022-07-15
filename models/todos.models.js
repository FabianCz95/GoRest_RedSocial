const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodosSchema = new Schema({
    user_id: { type: Number, required: true },
    title: { type: String, required: true },
    due_on: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Todos', TodosSchema);