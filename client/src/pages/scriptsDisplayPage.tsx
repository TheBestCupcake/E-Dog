import FileDisplay from "../components/fileDisplay";
import { useLocation } from "react-router-dom";

function ScriptsDisplayPage() {
  const location = useLocation();
  const script = location.state;

  return (
    <div>
      <FileDisplay id={script.id} />
    </div>
  );
}

export default ScriptsDisplayPage;
