const express = require('express');
const router = express.Router();
const tasks = require('../schemas/tasks');

router.get('/', (req, res) => {
    tasks.find({}, (error, tasks) => {
        if(error) {
            res.status(500).send('Error al obtener las tareas.');
        } else {
            res.send(tasks);
        }
    })
});

router.get('/:id', (req, res) => {
    tasks.find({id: req.params.id}, (error, task) => {
        if(error) {
            res.status(500).send('Error al obtener el task.');
        } else {
            res.send(task);
        }
    })
});

router.post('/create', (req, res) => {
    const task = new tasks(req.body);
    task.save((error, task) => {
        if(error) {
            res.status(500).send('Error al crear el task');
        } else {
            res.send(task);
        }
    })
})

router.put('/:id', (req, res) => {
    tasks.findOneAndUpdate({id: req.params.id}, req.body, (error, task) => {
        if(error) {
            res.status(500).send('Error al actualizar el task');
        } else {
            res.send(task);
        }
    })
});

router.delete('/:id', (req, res) => {
    tasks.findOneAndDelete({id: req.params.id}, (error, task) => {
        if(error) {
            res.status(500).send('Error al eliminar el task');
        } else {
            res.send(task);
        }
    })
})

module.exports = router;