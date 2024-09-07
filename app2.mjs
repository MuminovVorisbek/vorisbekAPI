import express from "express"

import fantasy from './routes/fantasy.mjs'
const port = 3000;

const app = express();

app.use('/fantasy',fantasy)

app.listen(port, () => {
    console.log('Server is running');
});
