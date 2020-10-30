const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(express.json());

const clientes = [
  {
    id:'1',
    nome:'Jose',
    fone:'11223344',
    email:'jose@email.com'
  },{
    id:'2',
    nome:'Maria',
    fone:'112233445566',
    email:'maria@email.com'
  }
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'Get, POST, DELETE, OPTIONS');
  next();
});

//http://localhost:3000/api/clientes
app.get('/api/clientes', (req, res, next) => {
  res.status(200).json({
    mensagem:"Tudo OK",
    clientes: clientes
  });
})

app.post('/api/clientes', (req, res, next) => {
  const cliente = req.body;
  console.log(cliente);
  res.status(201).json({mensagem: "Cliente inserido"});
})

module.exports = app;
