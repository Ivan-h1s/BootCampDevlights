const express = require('express');
const router = express.Router();
const roles = require('../schemas/roles');

router.get('/', (req, res) => {
    roles.find({}, (error, roles) => {
        if(error) {
            res.status(500).send('Error al obtener los roles.');
        } else {
            res.send(roles);
        }
    })
});

router.get('/:id', (req, res) => {
    roles.find({id: req.params.id}, (error, rol) => {
        if(error) {
            res.status(500).send('Error al obtener el rol.');
        } else {
            res.send(rol);
        }
    })
});

router.post('/create', (req, res) => {
    const rol = new roles(req.body);
    rol.save((error, rol) => {
        if(error) {
            res.status(500).send('Error al crear el rol');
        } else {
            res.send(rol);
        }
    })
})

router.put('/:id', (req, res) => {
    roles.findOneAndUpdate({id: req.params.id}, req.body, (error, rol) => {
        if(error) {
            res.status(500).send('Error al actualizar el rol');
        } else {
            res.send(rol);
        }
    })
});

router.delete('/:id', (req, res) => {
    roles.findOneAndDelete({id: req.params.id}, (error, rol) => {
        if(error) {
            res.status(500).send('Error al eliminar el rol');
        } else {
            res.send(rol);
        }
    })
})

module.exports = router;