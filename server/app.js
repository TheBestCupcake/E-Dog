const express = require('express');
const app = express();
const cors = require('cors');

//Used to allow requests from the frontends origin.
app.use(cors({
  origin: 'http://localhost:5173',
}));

const port = process.env.PORT || 3000

//Put Routes.
const scriptsRoutes = require("./routes/scriptsRoutes");

app.use(express.json());

//Sets the base route. All routes inside scriptsRoute are added onto this route eg ../Scripts/{endpoint here}.
app.use('/Scripts', scriptsRoutes);

//Starts server up on designated port.
app.use(express.json());


app.listen(port, () => console.log(`Listening on ${port}.`));