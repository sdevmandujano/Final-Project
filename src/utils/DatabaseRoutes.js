import Api from './API'


export default {
  
    getTeamers: function(idUser) {
      return Api().get("/api/team/", idUser);
    },
    getGames: function(idGame) {
      return Api().get("/api/game/", idGame);
    },
    
    saveUser: function(userData) {
      return Api().post("/api/addUser", userData);
    },
  
    getUser:async function(email) {
      console.log("get user " + email);
     return Api().get(`/api/players/${email}`);
    }
  };
  