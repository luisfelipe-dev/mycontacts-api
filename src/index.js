const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(3000, () => console.log('🔥 Server iniciado em http://localhost:3000'));

// PAREI NA AULA Criando a rota de cadastro de Contatos
