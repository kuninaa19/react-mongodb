import { Router } from 'express';
import Drink from '../../models/drink';

const route = Router();

export default (app) => {
    app.use('/', route);

    route.get('/', (req, res) => {
        // let drink = { name: 'Coca-Cola', price: 2100 };
        // Drink.find(drink).then(drink => {
        Drink.find().then(drink => {
            if (!drink.length) return res.status(404).send({ err: 'Drink not found' });
            res.send(`find result: ${drink}`);
        })
            .catch(err => res.status(500).send(err));
    });

    route.post('/', (req, res) => {
        let drink = { name: req.body.name, price: req.body.price };

        Drink.create(drink)
            .then(drink => res.send(drink))
            .catch(err => res.status(500).send(err));
    });

    route.put('/:name/:Uname/:price', (req, res) => {
        // let drink = { name: 'pepsi', price: 1700 };
        let drink = { name: req.params.name };
        let changeDrink = { name: req.params.Uname, price: req.params.price };

        Drink.updateOne(drink, { $set: changeDrink })
            .then(snack => res.send(snack))
            .catch(err => res.status(500).send(err));
    });

    route.delete('/:name', (req, res) => {
        // let drink = { name: 'Coca-Cola', price: 2100 };
        let drink = { name: req.params.name };

        Drink.deleteOne(drink)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err));
    });
};