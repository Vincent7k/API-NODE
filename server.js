// import http from 'http';
import app from './src/app.js';
import "dotenv/config";

// const routes = {
//     "/": "Node.js course",
//     '/dogs': 'Entered in the dogs routes',
//     '/cats': 'Entered in the cats routes',
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end(routes[req.url]);
// });

    app.listen(3000, () =>{
        console.log('server OK')
    })