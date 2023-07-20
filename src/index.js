import express from 'express';

import AmazonController from './controllers/amazonController.js';
import NeoController from './controllers/neoController.js';

const app = express();


app.get('/', async (req, res) => {
    const amazonController = new AmazonController();
    await amazonController.init();
    let query  = req.query.query;
    let pages = 4;
    const content = await amazonController.getData(query, pages);
    res.send(content);
    }
);
app.get('/neo', async (req, res) => {
    const neoController = new NeoController(false);
    await neoController.init();
    const content = await neoController.getData(req.query.search);
    res.send(content);
})
app.listen(3003, () => {
    console.log('Example app listening on port 3003!');
    }
);