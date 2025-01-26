import { Link } from "react-router-dom";
import logo from "/images/argentBankLogo.webp?url";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { loagout, fetchUserProfile } from "../../redux/userNameSlice";
import { useEffect } from "react";
function Header() {
  const { userName, token } = useSelector((state) => state.usernames);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      dispatch(fetchUserProfile(storedToken));
    }
  }, [dispatch, token]);

  return (
    <header className="Header">
      <img src={logo} />

      {!token ? (
        <nav>
          {" "}
          <Link to={"/"} title="home">
            <i className="fa-solid fa-circle-user"></i>
          </Link>
          <Link to={"/SignIn"}>Sign in</Link>{" "}
        </nav>
      ) : (
        <nav>
          {" "}
          <Link to={"/"} title="home">
            <i className="fa-solid fa-circle-user"></i>{" "}
          </Link>
          <Link to={"/User"} title="user page">
            <span>{userName}</span>
          </Link>
          <Link to={"/"} onClick={() => dispatch(loagout())}>
            <i className="fas fa-sign-out"></i>
            Sign out
          </Link>{" "}
        </nav>
      )}
    </header>
  );
}
export default Header;
