import { Link, useLocation } from "react-router-dom";
import logo from "/images/argentBankLogo.webp?url";
import "./style.scss";
import { useSelector } from "react-redux";
function Header() {
  const location = useLocation();
  const { userName, firstName } = useSelector((state) => state.usernames);

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
          <i className="fa-solid fa-circle-user"></i>{" "}
          <span>{userName ? userName : firstName}</span>
          <i className="fas fa-sign-out"></i>
          <Link to={"/"}>Sign out</Link>{" "}
        </nav>
      )}
    </header>
  );
}
export default Header;
