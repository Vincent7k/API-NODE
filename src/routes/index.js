import express  from "express";
import dog from "./dogsRoutes.js";

const routes = (app) =>{
    app.route('/').get((req, res) => {
        res.status(200).send('Node.js course');
        app.use(express.json(), dog)
    })
}