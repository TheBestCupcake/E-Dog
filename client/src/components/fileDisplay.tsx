import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchScriptById } from "../utils/scriptsServices";
import ReactHtmlParser from "html-react-parser";

function FileDisplay() {
  const location = useLocation();
  const script = location.state;
  const id = script.id;

  const [scriptHtml, setScriptHtml] = useState("");

  useEffect(() => {
    const loadScript = async () => {
      const data = await fetchScriptById(id);
      setScriptHtml(data.html);
    };

    loadScript();
  });

  return <div>{ReactHtmlParser(scriptHtml)}</div>;
}

export default FileDisplay;
