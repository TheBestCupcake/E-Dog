import { BrowserRouter, Router } from "react-router-dom";
import RoutesProvider from "./utils/routes";
import ItemListComponent from "./components/itemList";
import FileDisplay from "./components/fileDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <p>IJDWIAJIJ</p>
          <ItemListComponent></ItemListComponent>

          <div>
            <FileDisplay></FileDisplay>
          </div>
        </div>

        <div>
          <RoutesProvider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
