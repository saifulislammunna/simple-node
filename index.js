const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* const handler = (req, res) => {
    res.send('Hello from node');
} */

app.get('/', (req, res) => {
    res.send('Hello From My First ever node');
});


app.listen(port, () => {
    console.log('listening to port', port);
} );