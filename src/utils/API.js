import axios from "axios";

axios.create({
  baseURL: `http://localhost:3005/`
})

export default {
  
  getTeamers: function(idUser) {
    return axios.get("/api/team/", idUser);
  },
  getGames: function(idGame) {
    return axios.get("/api/game/", idGame);
  },
  
  saveUser: function(userData) {
    return axios.post("/api/addUser", userData);
  },

  getUser: function() {
    return axios.get("/api/players");
  }
};
