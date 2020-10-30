const http = require('http');
const app = require ('./backend/app');

const porta = process.env.PORT || 3000;

app.set('port', porta);

const server = http.createServer(app);
//const server = http.createServer((req, res) => {
  //res.end("Hello do Back End");
//});

server.listen(process.env.PORT || 3000);