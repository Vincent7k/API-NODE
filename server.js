import http from 'http';

const PORT = 3000;

const routes = {
    "/": "Node.js course",
    '/dogs': 'Entered in the dogs routes',
    '/cats': 'Entered in the cats routes',
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(routes[req.url]);
});

    server.listen(PORT, () =>{
        console.log('server OK')
    })