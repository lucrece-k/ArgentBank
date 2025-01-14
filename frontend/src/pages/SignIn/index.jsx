import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import loaginOk from "../../redux/userNameSlice";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiSingin = "http://localhost:3001/api/v1/user/login";

  function verifyField() {
    if (username === "" || password === "") {
      console.log("champ manquant");
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
    if (!verifyField()) {
      return;
    }

    const user = {
      email: username,
      password: password,
    };
    sendSignInRequest(JSON.stringify(user)).then((response) => {
      console.log(response.body.token);

      if (!response.body.token || response.body.token === undefined) {
        console.log("Utilisateur unconnu");
        return;
      } else {
        console.log("1");

        dispatch(loaginOk(response.body.token));
        console.log("2");
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
