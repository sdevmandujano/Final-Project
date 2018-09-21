import UserProfile from "../views/UserProfile/UserProfile";
import Notifications from "../views/Notifications/Notifications";
import Selection from "../views/Selection";
import Teams from "../views/Teams/Teams";
import RatePage from "../views/RatePage/RatePage";
import { GamePage } from "../views/GamePage/GamePage";
import dashboard from "../components/dashboard/dashboard";

const dashboardRoutes = [
  {
    path: "/",
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
    path: "/user/puntajes",
    name: "Puntajes",
    icon: "pe-7s-star",
    component: RatePage
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
    component: dashboard 
  }
];

export default dashboardRoutes;
