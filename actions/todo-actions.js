module.exports = {
  init: () => ['default todo'],
  addTodo: (todos, newTodo) => todos.concat(newTodo),
  completeTodo: (todos, completedTodo) =>
    todos.filter(todo => todo !== completedTodo)
}
