import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home, About, List } from '../pages';


const routes: RouteObject[] = [
  {path: "/", element: <Home children={undefined} />},
  {path: "about", element: <About children={undefined} />},
  {path: "list",
   element: <List children={undefined} />,
   children: [{
      path: ':tipo',
      // element: <List children={undefined} />
   }]
  }
];

export const router = createBrowserRouter(routes, {
  basename: '/apps/acordos'
});