const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header'),
  todo: require('../elements/todo'),
  done: require('../elements/done')
})

module.exports = (store, actions, params) => {
  const addTodo = (event) => {
    if (event.keyCode === 13) {
      actions.addTodo(event.target.value)
    }
  }

  const completeTodo = (event) => {
    const todoText = event.target.textContent
    actions.completeTodo(todoText)
  }

  const todoDOM = store.todos.map(todo => html`<todo onclick=${completeTodo}>${todo}</todo>`)
  const doneDOM = store.dones.map(done => html`<done>${done}</done>`)

  return html`
    <div>
      <header></header>
      <input placeholder="New Todo" onkeyup=${addTodo} />
      ${todoDOM}
      <h3>Completed</h3>
      <hr />
      <done>This is done</done>
      ${doneDOM}
    </div>
  `
}
