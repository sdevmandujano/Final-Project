import axios from "axios";

axios.create({
  baseURL: `http://localhost:3005/`
})

export default {
  
  getTeamers: function(idUser) {
    return axios.get("https://localhost:3005/api/team/", idUser);
  },
  getGames: function(idGame) {
    return axios.get("https://localhost:3005/api/game/", idGame);
  },
  
  saveUser: function(userData) {
    return axios.post("https://localhost:3005/api/addUser", userData);
  },

  getUser: function() {
    return axios.get("http://localhost:3005/api/players");
  }
};
