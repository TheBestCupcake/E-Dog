import { BrowserRouter, Router } from "react-router-dom";
import RoutesProvider from "./utils/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <p>IJDWIAJIJ</p>
        </div>

        <div>
          <RoutesProvider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
