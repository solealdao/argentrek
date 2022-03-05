const express = require('express');
const app = express();
const path = require('path');

//Configuración template engine
app.set('view engine', 'ejs');

//Configuración de rutas
let mainRoutes = require('./routes/mainRoute.js');
app.use('/', mainRoutes);
let trekRoutes = require('./routes/treks.js');
app.use('/treks', trekRoutes);
let userRoutes = require('./routes/users.js');
app.use('/users', userRoutes);

//Configuración recursos estáticos
const publicPath = path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

//Configuración del Servidor
app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
   });

app.listen(3000, () =>
    console.log('Servidor corriendo en el puerto 3000')
   );
   