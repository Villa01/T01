
const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {

    const { num1, num2 } = req.body;

    res.status(200).json({
        info: num1 + num2
    })
});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})