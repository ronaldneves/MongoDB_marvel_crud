import express from 'express';
import personagens from "./personagensRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Databse de Personagens"});
    });

    app.use(express.json(), personagens);
}

export default routes;