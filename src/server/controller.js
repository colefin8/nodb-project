const axios = require("axios");

module.exports = {
  genList(req, res) {
    const { gen } = req.params;
    axios.get(`https://pokeapi.co/api/v2/pokedex/${gen}`).then(response => {
      const data = [...response.data.pokemon_entries];
      //   console.log(response.data.pokemon_entries);
      res.status(200).send(data);
    });
  }
};
