import express from 'express';
import xtremeController from './controllers/xtremeController.js';
const app = express();


app.get('/', async (req, res) => {
    const xtremeController = new XtremeController();
    await xtremeController.init();
    let query  = req.query.query;
    let pages = 4;
    const content = await xtremeController.getData(query, pages);
    res.send(content);
    }
);

app.listen(3003, () => {
    console.log('Example app listening on port 3000!');
    }
);