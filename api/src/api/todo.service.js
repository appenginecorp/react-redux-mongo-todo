const todoSchema = require('./todo.schema');

todoSchema.methods(['get', 'post', 'put', 'delte']);
todoSchema.updateOptions({new: true, runValidators: true});

module.exports = todoSchema;