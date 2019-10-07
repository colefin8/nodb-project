const axios = require("axios");
const team = [];

module.exports = {
  genList(req, res) {
    const { num } = req.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokedex/${num}`)
      .then(response => {
        const data = [...response.data.pokemon_entries];
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
  },

  getTeam(req, res) {
    res.status(200).send(team);
  },

  removeFromTeam(req, res) {
    const { index } = req.params;
    // console.log(index);
    team.splice(index, 1);
    res.status(200).send(team);
  },

  addToTeam(req, res) {
    const addOn = req.body;
    // console.log(addOn);
    team.push(addOn);
    res.status(200).send(team);
  },

  editNickname(req, res) {
    const { value } = req.body;
    // console.log(req.body);
    const { index } = req.params;
    // console.log(index);
    team[index].nickname = value;
    res.status(200).send(team);
  }
};
