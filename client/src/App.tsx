import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./utils/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <RoutesProvider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
