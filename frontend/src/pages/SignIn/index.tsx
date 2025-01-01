import { Link } from "react-router-dom";
import "./style.scss";
function SignIn() {
  return (
    <div className="SignIn">
      <section>
        <div className="icon-titre">
          <i className="fa-solid fa-circle-user"></i>
          <h1>sign-in</h1>
        </div>
        <form action="">
          <div className="label-input">
            <label htmlFor="Username">Username</label>
            <input type="text" id="Username" name="Username" />
          </div>
          <div className="label-input">
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" name="Password" />
          </div>
          <div className="Remember">
            <input type="checkbox" name="Remember" id="Remember" />
            <label htmlFor="Remember">Remember me</label>
          </div>
          <button className="submit-button">
            <Link to={"/User"}>Sign In</Link>
          </button>
        </form>
      </section>
    </div>
  );
}
export default SignIn;
