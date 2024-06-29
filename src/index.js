const express = require('express');
const app = express();

const router = require('./routes.js');

app.use(router);

app.listen(3000, () => {
    console.log(`Servidor rodando da porta: ${3000}`)
})

