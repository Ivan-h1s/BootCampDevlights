const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const log = require('./middlewares/logs');

const usersRoute = require('./routes/usersRoute');
const rolesRoute = require('./routes/rolesRoute');
const tasksRoute = require('./routes/tasksRoute');

app.use(log);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.use('/users', usersRoute);
app.use('/roles', rolesRoute);
app.use('/tasks', tasksRoute);

mongoose.connect("mongodb://127.0.0.1:27017/mongoDB", (error) => {
    if(error) {
        console.log("Error al conectar con MongoDB", error);
    } else {
        console.log("Conexion exitosa con MongoDB");
    }
})

app.listen(3000, () => {
    console.log("Server funcionando en puerto 3000");
});

//