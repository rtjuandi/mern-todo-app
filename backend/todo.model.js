const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

// Export Schemo. To import in server.js
module.exports = mongoose.model('Todo', Todo);