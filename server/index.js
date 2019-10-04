require("dotenv").config({ path: __dirname + "/../.env" });
const controller = require("./controller");
const express = require("express");
const { SERVER_PORT } = process.env;
const app = express();
app.use(express.json());

//gets list of all pokemon from selected generation
app.get(`/api/pokemon/:gen`, controller.genList);

app.get(`/api/pokemon/details/:data`, controller.details);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
