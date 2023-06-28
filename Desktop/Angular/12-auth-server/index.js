const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();


//Crear el servidor/aplicación de express
const app = express();

//Base de datos
dbConnection();

//Directorio publico
app.use(express.static('public'));

//Cors
app.use(cors());

//Lectura y parseo del body 
app.use(express.json());

//Configurar rutas
app.use('/api/auth/', require('./routes/auth'));

//Levantamos la aplicación de express
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})