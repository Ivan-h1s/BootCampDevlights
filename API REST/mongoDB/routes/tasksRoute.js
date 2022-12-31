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
    tasks.findById(req.params.id, (error, task) => {
        if(error) {
            res.status(500).send('Error al obtener el task.');
        } else {
            res.send(task);
        }
    })
});

router.post('/', (req, res) => {
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
    tasks.findByIdAndUpdate(req.params.id, req.body, (error, task) => {
        if(error) {
            res.status(500).send('Error al actualizar el task');
        } else {
            res.send(task);
        }
    })
});

router.delete('/:id', (req, res) => {
    tasks.findByIdAndDelete(req.params.id, (error, task) => {
        if(error) {
            res.status(500).send('Error al eliminar el task');
        } else {
            res.send(task);
        }
    })
})

module.exports = router;