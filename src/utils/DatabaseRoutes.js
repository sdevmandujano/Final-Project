import Api from './API'


export default {
  
    getTeamers: function(idUser) {
      return Api().get("/api/team/", idUser);
    },
    saveUser: function(userData) {
      //works
      return Api().post("/api/createUser", userData);
    },
    saveFavorite: function(prefGames,user) {
      //works saves favorites by user
      return Api().post("/api/favGame", { username:user, favorite:prefGames});
    },
    getUserId:async function(email) {
      //works 
      console.log("get user id " + email);
     return Api().get(`/api/email/${email}`);
    },
    getUser:async function(id) {
      //works
      console.log("get user " + id);
     return Api().get(`/api/player/${id}`);
    },
    //Works gets the list of all available games 
    getGames:async function( ) {
      console.log("get games ");
     return Api().get(`/api/games`);
    },
    //Works Get the favorites by User
    getUserFavorites:async function(id) {
      console.log("get user Favorites ");
     return Api().get(`/api/favUserGames/${id}`);
    },

    deleteFavorite:async function(id) {
      console.log("delete from  Favorites ");
     return Api().delete(`/api/favUserGames/${id}`);
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
  