import axios from 'axios'
// import store from '@/store/store'

<<<<<<< HEAD
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
=======
export default () => {
  return axios.create({
    baseURL: `http://localhost:3005/`
  })
}
>>>>>>> 0906f7285e2b99b94e6eb9b5961a6132c23e7927
