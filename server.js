const express = require('express');

//const app = express();

//app.get('/', (req, res) => res.send('<h1>Express con Html</h1>'))
app.get('/', (req, res) => {
res.sendFile("/home/ubuntu/AS221S2/Instucion.html")
});

//Recursos
app.use(express.static(__dirname+'/'));

app.listen(3000);
console.log('Server on port 3000')