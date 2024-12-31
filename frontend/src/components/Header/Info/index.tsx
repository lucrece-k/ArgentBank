import logoInfo from "../../../assets/images/icon-money.webp";
import "./style.scss";
function Info() {
  return (
    <div className="Info">
      <img src={logoInfo} alt="logo info" />
      <h3>You are our #1 priority</h3>
      <p>
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </p>
    </div>
  );
}
export default Info;
