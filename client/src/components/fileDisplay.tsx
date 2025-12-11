import { useEffect, useState } from "react";
import { fetchScriptById } from "../utils/scriptsServices";
import ReactHtmlParser from "html-react-parser";

interface scriptProps {
  id: string;
}

function FileDisplay({ id }: scriptProps) {
  const [scriptHtml, setScriptHtml] = useState("");

  useEffect(() => {
    const loadScript = async () => {
      const data = await fetchScriptById(id);
      setScriptHtml(data.html);
    };

    loadScript();
  });

  return <div className="page-content">{ReactHtmlParser(scriptHtml)}</div>;
}

export default FileDisplay;
