import UserProfile from "../views/UserProfile/UserProfile";
import Notifications from "../views/Notifications/Notifications";
import Teams from "../views/Teams/Teams";
import RatePage from "../views/RatePage/RatePage";
import Selection from "../views/Selection";
import { GamePage } from "../views/GamePage/GamePage";

const dashboardRoutes = [
  {
    path: "/",
    name: "Home",
    icon: "pe-7s-home",
    component: Selection
  },
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
    path: "/user/puntajes",
    name: "Score",
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
    path: "/GamePage/GamePage",
    component: GamePage
  }


];

export default dashboardRoutes;
