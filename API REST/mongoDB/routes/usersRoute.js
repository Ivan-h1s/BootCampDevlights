const express = require('express');
const router = express.Router();
const users = require('../schemas/users');

router.get('/', async (req, res) => {
    try {
        const usuarios = await users.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).send("Error al obtener los usuarios.");
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await users.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("Error al obtener el usuario.");
    }
});

router.post('/create', async (req, res) => {
    const user = new users(req.body);
    try {
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).send('Error al crear el usuario');
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const newUser = await users.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({msj: "Se actualizó con éxito", newUser});
    } catch (error) {
        res.status(500).json("Error al actualizar");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await users.findByIdAndDelete(id);
        res.status(200).json("Se elimino con éxito");
    } catch (error) {
        res.status(200).json("Error al eliminar el usuario");
    }
})

module.exports = router;