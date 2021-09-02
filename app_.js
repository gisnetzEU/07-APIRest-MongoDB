const usuario = require('./routes/usuarios');
const express = require('express');
const mongoose = require('mongoose');

//Conectar a la bd
mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectando a MongoDB...')

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api/usuarios', usuarios);

    //Configuración del puerto y conexion
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('Api RESTFul Ok, y ejecutándose...');
    })

  })
  .catch(err => console.log('No se pudo conectar a MongoDB..', err));
