import { Link, useLocation } from "react-router-dom";
import logo from "/images/argentBankLogo.webp?url";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const location = useLocation();
  const username = useSelector((state) => state.username);
  const user = useSelector((state) => state.connect);
  const dispatch = useDispatch();
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
          <span>
            {connect.firstName}||{username.user}
          </span>
          <i className="fas fa-sign-out"></i>
          <Link to={"/"}>Sign out</Link>{" "}
        </nav>
      )}
    </header>
  );
}
export default Header;
