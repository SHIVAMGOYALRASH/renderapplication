const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
    response.send({
        status: 200,
        message: 'Ok'
    });
});

app.listen(PORT, (error)=>{
    if(error) console.log(error);
    console.log('The application in running');
});