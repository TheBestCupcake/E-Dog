import { Route, Routes } from "react-router-dom";
import ScriptsListPage from "../pages/scriptsListPage";
import ScriptsDisplayPage from "../pages/scriptsDisplayPage";
//Component imports.

let routeVariables: any[] = [
  { path: "/", name: "Home", component: <ScriptsListPage /> },
  { path: "/:name", name: ":name", component: <ScriptsDisplayPage /> },
];

function RoutesProvider() {
  const routesObjects = routeVariables.map((variable) => (
    <Route
      key={variable.path}
      path={variable.path}
      element={variable.component}
    />
  ));

  return <Routes>{routesObjects}</Routes>;
}

export default RoutesProvider;
