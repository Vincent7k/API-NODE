// import http from 'http';
import app from './src/app.js';
const PORT = 3000;

// const routes = {
//     "/": "Node.js course",
//     '/dogs': 'Entered in the dogs routes',
//     '/cats': 'Entered in the cats routes',
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end(routes[req.url]);
// });

    app.listen(PORT, () =>{
        console.log('server OK')
    })