import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.webp";
import "./style.scss";
function Header() {
  const location = useLocation();
  return (
    <header className="Header">
      <img src={logo} />

      {location.pathname === "/" || location.pathname === "/SignIn" ? (
        <nav>
          {" "}
          <i className="fa-solid fa-circle-user"></i>
          <Link to={"/SignIn"}>Sign in</Link>{" "}
        </nav>
      ) : (
        <nav>
          {" "}
          <i className="fa-solid fa-circle-user"></i> nom
          <i className="fas fa-sign-out"></i>
          <Link to={"/"}>Sign out</Link>{" "}
        </nav>
      )}
    </header>
  );
}
export default Header;
