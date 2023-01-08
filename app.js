const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send({
        status: 200,
        message: 'Ok'
    });
});

app.listen(3000);