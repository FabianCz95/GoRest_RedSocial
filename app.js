const express = require('express'),
    app = express(),
    PORT = 3000;


app.use(express.urlencoded({ extended: false }))
app.use(express.json());

var routerUsers = require('./routers/users');
app.use('/users', routerUsers);

var routerPosts= require('./routers/posts');
app.use('/posts', routerPosts);

var routerComments = require('./routers/comments');
app.use('/comments', routerComments);

var routerTodos = require('./routers/todos');
app.use('/todos', routerTodos);

app.listen(PORT);