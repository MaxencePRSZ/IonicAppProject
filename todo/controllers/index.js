function getAllTodos(req, res) {
  //res.render('fiche',{Title:'Info734', Description: 'TEST'});

  const Todo = require('../../todo/models');

  Todo.find({}, function(err, todos) {

    if (err) throw err;

    res.render('todos', {todos : todos});

  });
}

function getOneTodo(req, res) {
  const Todo = require('../../todo/models');

  Todo.find({_id : req.params.id}, function(err, todo) {

    if (err) throw err;

    res.render('todo', {todo : todo[0]});
  });

}

module.exports.getAllTodos = getAllTodos;
module.exports.getOneTodo = getOneTodo;