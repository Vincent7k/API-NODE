 import express from 'express';
 import connectDataBase from './config/dbConnect.js';
 import routes from './routes/index.js';

 const connection = await connectDataBase();

 connection.on("error", (error) =>{
    console.log("You dumbass, you messed up again!", error);
 });

 connection.once("open", (open) =>{
    console.log("No shit, you made it right this time!");
 });

const app = express();
routes(app);

// const dogs = [
//     {
//         id: 1,
//         race: 'Bull Dog',
//     },
//     {
//         id: 2,
//         race: 'PitBull',
//     },
// ];

// function findDog(id) {
//     return dogs.findIndex(dog =>{
//         return dog.id === Number(id);
//     });
// }
//Instalar uma biblioteca específica @+nº da versão exemplo @3.2.1
// C create
// R read
// U update
// D delete

 //anotação array conchetes
 //anotação dos objetos {}
// app.get('/',(req, res) => {
//     res.status(200).send('Node.js course')
// });

// app.get('/dogs', async (req, res) =>{
//    const dogsList = await dogs.find({})
//     res.status(200).json(dogsList)
// });

// app.get("/dogs/:id", (req, res) =>{
//     const index = findDog(req.params.id);
//     res.status(200).json(dogs[index]);
// });

// app.put('/dogs/:id', (req, res) => {
//     const index = findDog(req.params.id);
//     dogs[index].race = req.body.race;
//     res.status(200).json(dogs)
// })

// app.delete('/dogs/:id', (req, res) => {
//     const index = findDog(req.params.id);
//     dogs.splice(index, 1);
//     res.status(200).send('Dog deleted')
    
// })


export default app;
