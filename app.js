
const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {

    res.status(200).json({
        info: 'Erick Villatoro - 201900907'
    })
});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})