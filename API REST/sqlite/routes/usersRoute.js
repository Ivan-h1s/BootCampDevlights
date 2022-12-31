const express = require('express');
const usersModel = require('../models/users');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const rols = await usersModel.findAll();
        res.json(rols);
    } catch (error) {
        res.json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const rol = await usersModel.findByPk(req.params.id);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const rol = await usersModel.create(req.body);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const rol = await usersModel.update(req.body, {
            where: {
                pk: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const rol = await usersModel.destroy({
            where: {
                pk: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;