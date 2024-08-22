import { createBrowserRouter } from "react-router-dom";
import { ADDConfig } from "./ConfigRoutes/Config.Routes";
import Contacts from "../Pages/Contacts";
import AddContact from "../Pages/AddContact";
import SingleShow from "../Pages/SingleShow";
import EditContact from "../Pages/EditContact";
import RedirectToContacts from "../Components/RedirectToContacts"; // Import the component

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToContacts />,
  },
  {
    path: ADDConfig.Home,
    children: [
      {
        index: true,
        element: <Contacts />,
      },
      {
        path: ADDConfig.AddContact,
        element: <AddContact />,
      },
      {
        path: ADDConfig.SingleShow,
        element: <SingleShow />,
      },
      {
        path: ADDConfig.Edit,
        element: <EditContact />,
      },
    ],
  },
]);