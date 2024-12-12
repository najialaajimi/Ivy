import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import DashboardOverview1 from "../Pages/DashboardOverview1";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import ListClients from "../Pages/Client/ListeClients";
import ListEmploye from "../Pages/Employe/Employe";
import ListRole from "../Pages/Role/Roles";
import ListPageWeb from "../Pages/PageWeb/PageWeb";
import UpdatePageWeb from "../Pages/PageWeb/UpdatePageWeb";
import ListSubscription from "../Pages/Subscription/Subsciption";
import CommandeClients from "../Pages/Order/OrderClient";
import ListeCategory from "../Pages/CategorieStory/ListeCategorie";
import AjouterCategory from "../Pages/CategorieStory/AjouterCategorie";
import HistoriquePack from "../Pages/OrdreProfessionnal/HistoriquePack";
import OrdreStory from "../Pages/Order/OrdreStoryPack";
import ListStory from "../Pages/Story/ListeStory";
import AjouterStory from "../Pages/Story/AjouterStory";
import UpdateSupscription from "../Pages/Subscription/UpdateSupscription";
import UpdateOrderStory from "../Pages/Order/UpdateOrderStory";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <DashboardOverview1 />,
        },
        {
          path: "historique_pack",
          element: <HistoriquePack />,
        },
        {
          path: "commande_story",
          element: <OrdreStory />,
        },
        {
          path: "update_order/:id",
          element: <UpdateOrderStory />,
        },
        {
          path: "list_story",
          element: <ListStory />,
        },
        {
          path: "add-story",
          element: <AjouterStory />,
        },
        {
          path: "category",
          element: <ListeCategory />,
        },
        {
          path: "ajouter-category",
          element: <AjouterCategory />,
        },
        {
          path: "client",
          element: <ListClients />,
        },
        {
          path: "employe",
          element: <ListEmploye />,
        },
        {
          path: "role",
          element: <ListRole />,
        },
        {
          path: "pages",
          element: <ListPageWeb />,
        },
        {
          path: "/pages/:id",
          element: <UpdatePageWeb />,
        },
        {
          path: "subscription",
          element: <ListSubscription />,
        },
        {
          path: "update_subscription/:id",
          element: <UpdateSupscription />,
        },
        {
          path: "commandes",
          element: <CommandeClients />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
