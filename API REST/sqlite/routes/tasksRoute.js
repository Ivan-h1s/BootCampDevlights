const express = require('express');
const tasksModel = require('../models/tasks');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const roles = await tasksModel.findAll();
        res.json(roles);
    } catch (error) {
        res.json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const rol = await tasksModel.findByPk(req.params.id);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.post('/create', async (req, res) => {
    try {
        const rol = await tasksModel.create(req.body);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const rol = await tasksModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const rol = await tasksModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;