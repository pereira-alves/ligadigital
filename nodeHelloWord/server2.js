const http = require('http');

const hostnane = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Liga Digital 2022')
});

server.listen(port, hostnane, () => {
    console.log('Server running at http://${hostname}:${port}/');
});