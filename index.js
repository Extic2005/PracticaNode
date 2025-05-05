// ya creado mi index.js

const http = require('http');

// Creo mi servidor
const server = http.createServer((req, res) => {
  // Establesco mi encabezado
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Envio la respuesta
  res.end('saludos mmmm');
});
////
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});