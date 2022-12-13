const http = require('http');
const express = require('express');
const app = express();

//const app = express();
//app.get('/', (req, res) => res.send('<h1>Express con Html</h1>'))

//Recursos
app.use(express.static(__dirname+'/'));

//enrutamiento
app.get('/', (req, res) => {
    res.sendFile("/home/ubuntu/AS221S2/Institucion.html")
});


app.listen(3000);
console.log('Server on port 3000')