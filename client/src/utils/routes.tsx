import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileDisplay from "../components/fileDisplay";
//Component imports.

let routeVariables: any[] = [
  { path: "/:name", name: ":name", component: <FileDisplay /> },
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
