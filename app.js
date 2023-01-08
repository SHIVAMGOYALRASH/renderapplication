const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
    response.send({
        status: 200,
        message: 'Ok'
    });
});
app.get('/DATA', (request, response) => {
    response.send({
        status: 200,
        message: 'DATA'
    });
});

app.listen(PORT, (error)=>{
    if(error) console.log(error);
    console.log('The application in running');
});