const axios = require("axios");

module.exports = {
  genList(req, res) {
    const { gen } = req.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokedex/${gen}`)
      .then(response => {
        const data = [...response.data.pokemon_entries];
        //   console.log(response.data.pokemon_entries);
        res.status(200).send(data);
      })
      .catch(err => console.log(err));
  },
  details(req, res) {
    const { data } = req.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${data}`)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(err => console.log(err));
  }
};
