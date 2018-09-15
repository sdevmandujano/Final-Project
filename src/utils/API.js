import axios from "axios";

export default {
  getTeamers: function(idGame) {
    return axios.delete("/api/team/", returnData);
  },
  
  saveUser: function(userData) {
    return axios.post("/api/addUser", userData);
  },

  getUser: function(userData) {
    return axios.get("/api/getUser", userData);
  }
};
