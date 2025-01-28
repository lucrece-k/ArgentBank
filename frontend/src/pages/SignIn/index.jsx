import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginOk } from "../../redux/userNameSlice";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const apiSingin = "http://localhost:3001/api/v1/user/login";

  function verifyField() {
    if (username === "" || password === "") {
      setErrorMessage("Please complete all fields.");
      return false;
    }
    return true;
  }
  async function sendSignInRequest(user) {
    try {
      const response = await fetch(apiSingin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: user,
      });
      return await response.json();
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  }

  function handledOnSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    if (!verifyField()) {
      return;
    }

    const user = {
      email: username,
      password: password,
    };
    sendSignInRequest(JSON.stringify(user)).then((response) => {
      if (!response.body.token || response.body.token === undefined) {
        setErrorMessage("Unknown user or incorrect information.");
        return;
      } else {
        dispatch(loginOk(response.body.token));

        navigate("/User");
      }
    });
  }
  return (
    <div className="SignIn">
      <section>
        <div className="icon-titre">
          <i className="fa-solid fa-circle-user"></i>
          <h1>sign-in</h1>
        </div>
        <form onSubmit={handledOnSubmit}>
          <div className="label-input">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              id="Username"
              name="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-login">{errorMessage}</p>}
          <div className="Remember">
            <input type="checkbox" name="Remember" id="Remember" />
            <label htmlFor="Remember">Remember me</label>
          </div>
          <button className="submit-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}
export default SignIn;
