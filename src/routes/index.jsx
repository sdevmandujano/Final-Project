import Landing from "../views/Landing";
import Dashboard from "../layouts/Dashboard/Dashboard";

const indexRoutes = [
  {
    path: "/",
    name: "Home",
    component: Landing
  },
  {
    path: "/user/:id",
    name: "User",
    component: Dashboard
  }
];



export default indexRoutes;
