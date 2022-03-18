const http = require('http');
const url = require('url')
const hostnane = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const parametrosConsulta = url.parse(req.url, true)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello Anderson')
});

server.listen(port, hostnane, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

// ctrl + c para de rodar o servidor