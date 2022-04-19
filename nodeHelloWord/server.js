const http = require('http');
const url = require('url')
const hostnane = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlAnalise = url.parse(req.url, true);
    const parametrosConsulta = urlAnalise.query;

    console.log(req.url);
    if (req.url.startsWith('/bye')){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Tchau')
        return;
    } else if (req.url.startsWith('/hello')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end(`Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`);
        return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Pagina nao encontrada ${req.url}`)
    
});



server.listen(port, hostnane, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

// ctrl + c para de rodar o servidor