import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Node.js course');
});

    server.listen(3000, () =>{
        console.log('Hello, world!')
    })