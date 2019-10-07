require("dotenv").config({ path: __dirname + "/../.env" });
const controller = require("./controller");
const express = require("express");
const { SERVER_PORT } = process.env;
const app = express();
app.use(express.json());



//gets list of all pokemon from selected generation
app.get(`/api/pokemon/gen/:num`, controller.genList);

app.get(`/api/pokemon/details/:data`, controller.details);

app.get(`/api/pokemon/team`, controller.getTeam)

app.delete(`/api/pokemon/team/:index`, controller.removeFromTeam)

app.post(`/api/pokemon/team`, controller.addToTeam)

app.put(`/api/pokemon/team/:index`, controller.editNickname)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
