const express = require('express')
const app=express();
const path=require('path')

app.use(express.urlencoded({ extended:false}));//esas funcion sirve para entender los datos del formulario
app.use(express.json());//tambien mi apliacion entendera formatos tipo json

app.use(require('./routes/rutas.js'));//importamos el archivo

/*le diecimos a el servidor que todo lo que esta dentro de la carpeta public sera accesible 
por le navegador*/ 
app.use(express.static(path.join(__dirname,'public')))


app.listen(3000,()=>{
    console.log('servidor iniciado en el puerto 3000');
});