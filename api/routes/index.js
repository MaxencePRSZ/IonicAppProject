const router = require('express').Router();
const controller = require('../controllers');

router.get('/api/todos',(req,res)=>{
    controller.getAllTodos(req,res);
});

router.get('/api/todo/:id',(req,res)=>{
    controller.getOneTodo(req,res);
});

router.post('/api/todo',(req,res)=>{
    controller.createTodo(req,res);
});

router.put('/api/update/todo/:id',(req,res)=>{
   controller.modifyTodo(req,res);
});

router.delete('/api/delete/todo/:id',(req,res)=>{
    controller.deleteTodo(req,res);
});

router.put('/api/todo/done/:id',(req,res)=>{
    controller.doneTodo(req,res);
});

router.get('/api/todos/getdone/:done',(req,res)=>{
   controller.getDone(req,res);
});

router.get('/api/todos/done',(req,res)=>{
   controller.doneTodos(req,res);
});

router.get('/api/todos/current',(req,res)=>{
   controller.currentTodos(req,res);
});

router.put('/api/todo/current/:id',(req,res)=>{
    controller.currentTodo(req,res);
});

module.exports=router;