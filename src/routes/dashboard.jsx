import UserProfile from "../views/UserProfile/UserProfile";
import Notifications from "../views/Notifications/Notifications";
import Teams from "../views/Teams/Teams";
import RatePage from "../views/RatePage/RatePage";
import dashboard from "../components/dashboard/dashboard";

const dashboardRoutes = [
  {
    path: "/",
    name: "Home",
    icon: "pe-7s-home",
    component: dashboard
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
  }
];

export default dashboardRoutes;
