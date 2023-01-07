const express = require('express');
const router = express.Router();
const users = require('../schemas/users');

router.get('/', (req, res) => {
    users.find({}, (error, users) => {
        if(error) {
            res.status(500).send('Error al obtener los usuarios.');
        } else {
            res.send(users);
        }
    })
});

router.get('/:id', (req, res) => {
    users.find({id: req.params.id}, (error, user) => {
        if(error) {
            res.status(500).send('Error al obtener el usuario.');
        } else {
            res.send(user);
        }
    })
});

router.post('/create', (req, res) => {
    const user = new users(req.body);
    user.save((error, user) => {
        if(error) {
            res.status(500).send('Error al crear el usuario');
        } else {
            res.send(user);
        }
    })
})

router.put('/:id', (req, res) => {
    users.findOneAndUpdate({id: req.params.id}, req.body, (error, user) => {
        if(error) {
            res.status(500).send('Error al actualizar el usuario');
        } else {
            res.send(user);
        }
    })
});

router.delete('/:id', (req, res) => {
    users.findOneAndDelete({id: req.params.id}, (error, user) => {
        if(error) {
            res.status(500).send('Error al eliminar el usuario');
        } else {
            res.send(user);
        }
    })
})

module.exports = router;