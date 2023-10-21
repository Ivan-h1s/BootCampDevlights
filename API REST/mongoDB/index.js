const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Use the model to perform CRUD operations
app.get('/samples', async (req, res) => {
    const samples = await Sample.find();
    res.json(samples);
  });

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

//conectamos a mongodb atlas usando mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error(err));

    // Define a schema and model for a sample data
/* const sampleSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
const Sample = mongoose.model('Sample', sampleSchema); */
// Manejamos eventos de conexión y error
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Error de conexión:'));
// db.once('open', () => {
//   console.log('Conexión exitosa con la base de datos.');
// });
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});