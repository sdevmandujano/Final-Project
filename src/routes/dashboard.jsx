import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Notifications from "../views/Notifications/Notifications";
import Selection from "../views/Selection";
import Landing from "../views/Landing";
import Games from "../components/Games";

const dashboardRoutes = [
  {
    path: "/user/profile",
    name: "Usuario",
    icon: "pe-7s-graph",
    component: UserProfile
  },
  {
    path: "/user/equipos",
    name: "Equipos",
    icon: "pe-7s-user",
    component: Selection
  },
  {
    path: "/user/top",
    name: "Puntaje",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/user/notificaciones",
    name: "Mensajes",
    icon: "pe-7s-bell",
    component: Notifications
  },
  {
    path: "/user/juegos",
    name: "Juegos",
    icon: "pe-7s-note2",
    component: Games
  }
];

export default dashboardRoutes;
