import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <FaGithub style={{ marginRight: "5px" }} />
        Github Finder
      </Link>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}

export default Header;
