import { Link, useLocation } from "react-router-dom";
import logo from "/images/argentBankLogo.webp?url";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { loagout } from "../../redux/userNameSlice";
function Header() {
  const location = useLocation();
  const { userName, firstName } = useSelector((state) => state.usernames);
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
          <span>{userName ? userName : firstName}</span>
          <i className="fas fa-sign-out"></i>
          <Link to={"/"} onClick={() => dispatch(loagout())}>
            Sign out
          </Link>{" "}
        </nav>
      )}
    </header>
  );
}
export default Header;
