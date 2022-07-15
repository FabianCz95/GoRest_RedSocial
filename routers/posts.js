const express = require('express'),
    axios = require('axios'),
    Post = require('../models/post.models.js'),
    router = express.Router(),
    URL = 'https://gorest.co.in/public/v2/posts',
    token = 'a24a092cb4e3725e3f4bec04c0cf1923b627936b938143e27057ac7e87509e39';

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

router.get('/:id', async (req, res) => {
    const id_User = req.params.id
    await axios.get(URL + `/${id_User}`, config)
        .then(response => {
            res.json(response.data);
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/', (req, res) => {
    axios.get(URL, config)
        .then(response => {
            res.json(response.data);
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/register', async (req, res) => {
    const { user_id, title, body } = req.body;
    const post = { user_id, title, body };



    await axios.post(URL, post, config)
        .then((response) => {
            console.log(post)
            new Post(post)
            res.json(response);
        })
        .catch((err) => {
            res.send('El email ya existe');
        })    
});

router.put('/:id', async (req, res) => {

    const id_post = req.params.id
    var post;

    await axios.get(URL + `/${id_post}`, config)
        .then(response => {
            post = response.data;
            return post;
        })
        .catch(err => {
            console.log(err)
        })

    const postData = req.body;   
    var propiedades = Object.keys(postData);

    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "title":
                post.title = postData.title;
                break;

            case "body":
                post.body = postData.body;
                break;

            default:
                break;
        }
    }
    

    await axios.put(URL + `/${id_post}`, post, config)
    
    res.send({
        message: "Se actualizó el posts correctamente"
    })

})

module.exports = router;