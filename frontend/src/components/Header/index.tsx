import { Link } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.webp";
import "./style.scss";
function Header() {
  return (
    <header className="Header">
      <img src={logo} />
      <nav>
        <i className="fa-solid fa-circle-user"></i>
        <Link to={"/SignIn"}>Sign in</Link>
      </nav>
    </header>
  );
}
export default Header;
