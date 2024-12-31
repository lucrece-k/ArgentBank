import logo from "../../assets/images/argentBankLogo.webp";
import "./style.scss";
function Header() {
  return (
    <header className="Header">
      <img src={logo} />
      <nav>
        <i>o</i>
        <a>Sign in</a>
      </nav>
    </header>
  );
}
export default Header;
