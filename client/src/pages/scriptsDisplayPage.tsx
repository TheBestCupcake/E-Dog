import DisplayRoute from "../components/displayRoute";
import FileDisplay from "../components/fileDisplay";
import { useLocation } from "react-router-dom";

function ScriptsDisplayPage() {
  const location = useLocation();
  const script = location.state;

  return (
    <div>
      <div>
        <DisplayRoute name={script.name} />
        <FileDisplay id={script.id} />
      </div>
    </div>
  );
}

export default ScriptsDisplayPage;
