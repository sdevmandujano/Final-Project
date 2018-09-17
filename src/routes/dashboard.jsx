import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Notifications from "../views/Notifications/Notifications";
import Selection from "../views/Selection";
import GamePage from "../views/GamePage";
import Games from "../components/Games";
import userIcon from  "../assets/img/userLogo.svg";
import Teams from "../views/Teams/Teams";
import CreateTeam from "../views/CreateTeam/CreateTeam";

const dashboardRoutes = [
  {
    path: "/user/profile",
    name: "Perfil",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/user/equipos",
    name: "Equipos",
    icon: "pe-7s-users",
    component: Teams
  },
  {
    path: "/user/top",
    name: "Puntajes",
    icon: "pe-7s-star",
    component: TableList
  },
  {
    path: "/user/notificaciones",
    name: "Mensajes",
    icon: "pe-7s-mail",
    component: Notifications
  },
  {
    path: "/user/juegos",
    name: "Busqueda",
    icon: "pe-7s-search",
    component: GamePage
  },
  {
    path: "/user/juegos/:id",
    component: GamePage
  }
];

export default dashboardRoutes;
