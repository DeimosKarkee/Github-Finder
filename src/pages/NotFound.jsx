import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <p>404-Page not found!</p>
      <Link to="/">
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
