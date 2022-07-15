const express = require('express'),
    axios = require('axios'),
    Comment = require('../models/comment.models.js'),
    router = express.Router(),
    URL = 'https://gorest.co.in/public/v2/comments',
    token = 'a24a092cb4e3725e3f4bec04c0cf1923b627936b938143e27057ac7e87509e39';

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

router.get('/:id', async (req, res) => {
    const id_comments = req.params.id
    await axios.get(URL + `/${id_comments}`, config)
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
    const { post_id, name, email, body } = req.body;
    const comment = { post_id, name, email, body };



    await axios.post(URL, comment, config)
        .then((response) => {
            new Comment(comment)
            res.json(response);
        })
        .catch((err) => {
            res.send('El email ya existe');
        })    
});

router.put('/:id', async (req, res) => {

    const id_comment = req.params.id
    var comment;

    await axios.get(URL + `/${id_comment}`, config)
        .then(response => {
            comment = response.data;
            return comment;
        })
        .catch(err => {
            console.log(err)
        })

    const commentData = req.body;    
    var propiedades = Object.keys(commentData);

    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name":
                comment.name = commentData.name;
                break;

            case "email":
                comment.email = commentData.email;
                break;

            case "body":
                comment.body = commentData.body;
                break;
                
            default:
                break;
        }
    }

    await axios.put(URL + `/${id_comment}`, comment, config)
    
    res.send({
        message: "Se actualizó el usuario correctamente"
    })

})

module.exports = router;