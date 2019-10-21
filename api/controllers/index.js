function getAllTodos(req, res) {
  const Todo = require('../../todo/models');

  Todo.find({}, function(err, todos) {

    if (err) throw err;

    res.json(todos);

  });

}

function getOneTodo(req, res) {
  const Todo = require('../../todo/models');

  Todo.find({_id : req.params.id}, function(err, todo) {

    if (err) throw err;

    res.json(todo);

  });

}

function createTodo(req, res) {
  const Todo = require('../../todo/models');

  const newTodo = Todo ({
    title: req.body.title,
    description : req.body.description
  });

  newTodo.save(function(err) {
    if (err) throw err;

    res.json({info: 'Success'});

  });

}

function modifyTodo(req, res) {
  const Todo = require('../../todo/models');

  Todo.findOneAndUpdate(
    {_id : req.params.id},

    { title: req.body.title,
      description : req.body.description

    }, function(err, todo) {
      if (err) throw err;

      res.json({info: 'Success'});

    });
}

function deleteTodo(req, res) {
  const Todo = require('../../todo/models');

  Todo.findOneAndRemove(
    {_id : req.params.id}, function(err, todo) {
      if (err) throw err;

      res.json({info: 'Success'});

    });
}

function doneTodo(req,res) {
  const Todo = require('../../todo/models');

  Todo.findOneAndUpdate(
    {_id : req.params.id},
    {done : true}, function(err,todo) {
      if (err) throw err;

      res.json({info: 'Success'});
    });
}

function currentTodo(req,res) {
  const Todo = require('../../todo/models');

  Todo.findOneAndUpdate(
    {_id : req.params.id},
    {done : false}, function(err,todo) {
      if (err) throw err;

      res.json({info: 'Success'});
    });
}

function getDone(req,res) {
  const Todo = require('../../todo/models');

  Todo.find({done : req.params.done},function(err,doneres) {
    if (err) throw err;
    res.json(doneres);
  });
}

function doneTodos(req,res) {
  const Todo = require('../../todo/models');

  Todo.find({done : true},function(err,todos) {
    if (err) throw err;
    res.json(todos);
  });
}

function currentTodos(req,res) {
  const Todo = require('../../todo/models');

  Todo.find({done : false},function(err,todos) {
    if (err) throw err;
    res.json(todos);
  });
}

module.exports.getAllTodos = getAllTodos;
module.exports.getOneTodo = getOneTodo;
module.exports.createTodo = createTodo;
module.exports.modifyTodo = modifyTodo;
module.exports.deleteTodo = deleteTodo;
module.exports.doneTodo = doneTodo;
module.exports.getDone = getDone;
module.exports.doneTodos = doneTodos;
module.exports.currentTodos = currentTodos;
module.exports.currentTodo = currentTodo;