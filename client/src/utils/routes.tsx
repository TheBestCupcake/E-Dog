import { BrowserRouter, Route, Routes } from "react-router-dom";
//Component imports.

let routeVariables: any[] = [];

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
