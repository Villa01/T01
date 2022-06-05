
const express = require('express');

const app = express();
const app2 = express();

const port = 4000;
const port2 = 3000;

app2.use(express.json())

app.get('/', (req, res) => {

    res.status(200).json({
        info: 'Erick Villatoro - 201900907'
    })
});

app.post('/sum', (req, res) => {

    const { num1, num2 } = req.body;

    res.status(200).json({
        info: num1 + num2
    })
});


app.post('/mul', (req, res) => {

    const { num1, num2 } = req.body;

    res.status(200).json({
        info: num1 * num2
    })
});

app2.post('/sub', (req, res) => {

    const { num1, num2 } = req.body;

    res.status(200).json({
        total: num1 - num2
    })
})

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})


app2.listen(port2, () => {
    console.log(`Server on port ${port2}`);
})