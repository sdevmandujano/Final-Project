import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Notifications from "../views/Notifications/Notifications";
import Selection from "../views/Selection";
import Landing from "../views/Landing";
import Games from "../components/Games";
import userIcon from  "../assets/img/userLogo.svg";

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
    component: Selection
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
    component: Games
  }
];

export default dashboardRoutes;
