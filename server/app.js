const express = require('express');
const app = express();

const port = process.env.PORT || 3000

//Put Routes.

//Starts server up on designated port.
app.use(express.json());


app.listen(port, () => console.log(`Listening on ${port}.`));