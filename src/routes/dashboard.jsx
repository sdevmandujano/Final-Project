import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Notifications from "../views/Notifications/Notifications";
import Upgrade from "../views/Upgrade/Upgrade";
import Selection from "../views/Selection";
import Landing from "../views/Landing";

const dashboardRoutes = [
  {
    path: "/user/profile",
    name: "Usuario",
    icon: "pe-7s-graph",
    component: UserProfile
  },
  {
    path: "/user/juegos",
    name: "Juegos",
    icon: "pe-7s-user",
    component: Selection
  },
  {
    path: "/user/top",
    name: "Amigos",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/user/notificaciones",
    name: "Mensajes",
    icon: "pe-7s-bell",
    component: Notifications
  },
];

export default dashboardRoutes;
