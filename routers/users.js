const express = require('express'),
    axios = require('axios'),
    User = require('../models/user.models.js'),
    router = express.Router(),
    URL = 'https://gorest.co.in/public/v2/users',
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
            res.send(response.data);
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/register', async (req, res) => {
    const { name, email, gender, status } = req.body;
    const user = new User({ name, email, gender, status });

    await axios.post(URL, user, config)
        .then((response) => {
            res.json(response);            
        })
        .catch((err) => {
            res.send('El email ya existe');
        })    
});

router.put('/:id', async (req, res) => {

    const id_User = req.params.id
    var user;

    await axios.get(URL + `/${id_User}`, config)
        .then(response => {
            user = response.data;
            return user;
        })
        .catch(err => {
            console.log(err)
        })

    const userData = req.body;    
    var propiedades = Object.keys(userData);

    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name":
                user.name = userData.name;
                break;

            case "email":
                user.email = userData.email;
                break;

            case "gender":
                user.gender = userData.gender;
                break;
            case "status":
                user.status = userData.status;
                break;
            default:
                break;
        }
    }

    await axios.put(URL + `/${id_User}`, user, config)
    
    res.send({
        message: "Se actualizó el usuario correctamente"
    })

})

module.exports = router;