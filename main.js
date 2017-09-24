const Tram = require('tram-one')

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addActions({todos: require('./actions/todo-actions')})
app.addActions({dones: require('./actions/done-actions')})
app.start('.main')
