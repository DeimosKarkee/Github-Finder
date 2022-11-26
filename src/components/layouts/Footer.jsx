import { FaCopyright } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <FaCopyright size={"60px"} />
      <p>Copyright &copy; {year}. Deimos Karkee</p>
    </footer>
  );
}

export default Footer;
