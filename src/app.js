 import express from 'express';

const app = express();
app.use(express.json());

const dogs = [
    {
        id: 1,
        race: 'Bull Dog',
    },
    {
        id: 2,
        race: 'PitBull',
    },
];

function findDog(id) {
    return dogs.findIndex(dog =>{
        return dog.id === Number(id);
    });
}

// C create
// R read
// U update
// D delete

 //anotação array conchetes
 //anotação dos objetos {}
app.get('/',(req, res) => {
    res.status(200).send('Node.js course')
});

app.get('/dogs', (req,res) =>{
    res.status(201).send(dogs);
});

app.post('/dogs', (req, res) =>{
    dogs.push(req.body);
    res.status(200).send('Dogs sucesfully inserted')
});

app.get("/dogs/:id", (req, res) =>{
    const index = findDog(req.params.id);
    res.status(200).json(dogs[index]);
});

app.put('/dogs/:id', (req, res) => {
    const index = findDog(req.params.id);
    dogs[index].race = req.body.race;
    res.status(200).json(dogs)
})

app.delete('/dogs/:id', (req, res) => {
    const index = findDog(req.params.id);
    dogs.splice(index, 1);
    res.status(200).send('Dog deleted')
    
})


export default app;
