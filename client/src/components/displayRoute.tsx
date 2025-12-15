import { Link } from "react-router-dom";

function DisplayRoute({ name }: { name: string }) {
  return (
    <div>
      <Link className="top-link" key={`Home`} to={`/`}>
        Home
      </Link>
      <p className="top-link">{name}</p>
    </div>
  );
}

export default DisplayRoute;
