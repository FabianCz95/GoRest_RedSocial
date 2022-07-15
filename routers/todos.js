const express = require('express'),
    axios = require('axios'),
    Todos = require('../models/todos.models.js'),
    router = express.Router(),
    URL = 'https://gorest.co.in/public/v2/todos',
    token = 'a24a092cb4e3725e3f4bec04c0cf1923b627936b938143e27057ac7e87509e39';

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

router.get('/:id', async (req, res) => {
    const id_Todosr = req.params.id
    await axios.get(URL + `/${id_Todosr}`, config)
        .then(response => {
            res.json(response.data);
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/', async (req, res) => {
    await axios.get(URL, config)
        .then(response => {
            res.json(response.data);
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/register', async (req, res) => {
    const { user_id, title, status } = req.body;
    const todos = { user_id, title, status, due_on: new Date() };

    await axios.post(URL, todos, config)
        .then((response) => {
            new Todos(todos)
            res.json(response);
        })
        .catch((err) => {
            res.send('El email ya existe');
        })    
});

router.put('/:id', async (req, res) => {

    const id_todos = req.params.id
    var todos;

    await axios.get(URL + `/${id_todos}`, config)
        .then(response => {
            todos = response.data;
            return todos;
        })
        .catch(err => {
            console.log(err)
        })

    const todosData = req.body;    
    var propiedades = Object.keys(todosData);

    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "title":
                todos.title = todosData.title;
                break;

            case "status":
                todos.status = todosData.status;
                break;

            default:
                break;
        }
    }

    await axios.put(URL + `/${id_todos}`, todos, config)
    
    res.send({
        message: "Se actualizó el todo correctamente"
    })

})

module.exports = router;