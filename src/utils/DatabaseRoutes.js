import Api from './API'


export default {
  
    getTeamers: function(idUser) {
      return Api().get("/api/team/", idUser);
    },
    saveUser: function(userData) {
      return Api().post("/api/addUser", userData);
    },
    getUserId:async function(email) {
      console.log("get user id" + email);
     return Api().get(`/api/email/${email}`);
    },
    getUser:async function(id) {
      console.log("get user " + id);
     return Api().get(`/api/player/${id}`);
    },
    //remove a favorite from a particular user 
    getGames:async function( ) {
      console.log("get games ");
     return Api().get(`/api/games`);
    },
    //Adds a favorite to the table, returns the id 
    addFavorite:async function( userId, gameId) {
      console.log("add Favorite ");
     return Api().post(`/favGame`, {userId:userId, gameId:gameId});
    },
    //returns all the users that like the same game (pending backend)
    getUserByFav:async function(gameId) {
      console.log("getUserFav ");
     return Api().get(`/players/favorites/${gameId}`)
    },
    //remove a favorite from a particular user (pending backend)
    removeFavorite:async function( userId, gameId) {
      console.log("remove Favorite ");
     return Api().post(`/favGame`, {userId:userId, gameId:gameId});
    },
  };
  