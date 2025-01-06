import { useEffect, useLayoutEffect, useState } from "react";
import Account from "../../components/Account";
import "./style.scss";
import acountData from "./account";
function User() {
  const [showsection, setShowsection] = useState(true);
  useEffect(() => {}, [showsection]);

  return (
    <div className="User">
      {showsection && (
        <section className="header">
          <h1>
            Welcome back <br />
            Prenom Nom!
          </h1>
          <button onClick={() => setShowsection(!showsection)}>
            Edit Name
          </button>
        </section>
      )}
      {!showsection && (
        <section className="user-info">
          <p>Edit user info</p>
          <form action="">
            <div>
              <label htmlFor="user-name">User name:</label>
              <input type="text" id="user-name" name="user-name" />
            </div>
            <div>
              <label htmlFor="first-name">First name:</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div>
              <label htmlFor="last name">Last name:</label>
              <input type="text" id="last name" name="last name" />
            </div>
            <div className="save-cancel-button">
              <button>Save</button>
              <button>Cancel</button>
            </div>
          </form>
        </section>
      )}
      {acountData.map((account, id) => (
        <ul>
          <li key={account.id}>
            <Account
              title={account.title}
              somme={account.somme}
              sousTitre={account.sousTitre}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
export default User;
