import express from 'express'
import products from './db/products.mjs'
import products2 from './db/products2.mjs'
import products3 from './db/products3.mjs'
import products4 from './db/products4.mjs'
import products5 from './db/products5.mjs'
import products6 from './db/products6.mjs'
import bp from 'body-parser'
import fantasy from './routes/fantasy.mjs'
import bodyParser from 'body-parser'
const app = express()

app.use('/fantasy',fantasy);
app.use(bodyParser.json());

const host = "localhost"
const port = 3000
app.get('/', (req, res) => {
    res.senf(200)
});
// app.route('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IiBWb3Jpc2JlayIsImlhdCI6MTUxNjIzOTAyMn0.5cuos2PKBN1KUI07qt2VUQyM_n9uI0mfrGkADBbjDKU')
// .get((req,res) => {
//     res.json(products);
// })
app.get('/products?', (req, res) => {
    res.json(products)
});
app.put("products", (req,res) => {
    const id = req.query.id;
    const bodyData = req.body
    const data = products.filter((data) => data.id !== id)
})
app.post('/products/add_new', (req, res) => {
    const data = req.body
    res.json(data)
    res.send(`${data} has been sucsessful added`)
});
app.get('/products2', (req, res) => {
    res.json(products2)
});
app.put("products2", (req,res) => {
    const id = req.query.id;
    const bodyData = req.body
    const data = products2.filter((data) => data.id !== id)
})
app.post('/products2/add_new', (req, res) => {
    const data = req.body
    res.json(data)
    res.send(`${data} has been sucsessful added`)
});
app.get('/products3', (req, res) => {
    res.json(products3)
});
app.put("products3", (req,res) => {
    const id = req.query.id;
    const bodyData = req.body
    const data = products3.filter((data) => data.id !== id)
})
app.post('/products3/add_new', (req, res) => {
    const data = req.body
    res.json(data)
    res.send(`${data} has been sucsessful added`)
});
app.get('/products4', (req, res) => {
    res.json(products4)
});
app.put("products4", (req,res) => {
    const id = req.query.id;
    const bodyData = req.body
    const data = products4.filter((data) => data.id !== id)
})
app.post('/products4/add_new', (req, res) => {
    const data = req.body
    res.json(data)
    res.send(`${data} has been sucsessful added`)
});
app.get('/products5', (req, res) => {
    res.json(products5)
});
app.put("products5", (req,res) => {
    const id = req.query.id;
    const bodyData = req.body
    const data = products5.filter((data) => data.id !== id)
})
app.post('/products5/add_new', (req, res) => {
    const data = req.body
    res.json(data)
    res.send(`${data} has been sucsessful added`)
});
app.get('/products6', (req, res) => {
    res.json(products6)
});
app.put("products6", (req,res) => {
    const id = req.query.id;
    const bodyData = req.body
    const data = products6.filter((data) => data.id !== id)
})
app.post('/products6/add_new', (req, res) => {
    const data = req.body
    res.json(data)
    res.send(`${data} has been sucsessful added`)
});
app.listen(port , host , () => {
    console.log(`Server is running at http://${host}:${port}/`);
})