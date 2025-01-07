import { useEffect, useState } from "react";
import Account from "../../components/Account";
import "./style.scss";
import accountData from "../../account.json";
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
      <ul>
        {accountData.map((account) => (
          <Account
            key={account.id}
            title={account.title}
            somme={account.somme}
            sousTitre={account.sousTitre}
          />
        ))}
      </ul>
    </div>
  );
}
export default User;
