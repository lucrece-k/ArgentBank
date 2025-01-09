import { useEffect, useState } from "react";
import Account from "../../components/Account";
import "./style.scss";
import accountData from "../../account.json";
import { useSelector, useDispatch } from "react-redux";
function User() {
  const [showsection, setShowsection] = useState(true);
  useEffect(() => {}, [showsection]);
  const username = useSelector((state) => state.username);
  const user = useSelector((state) => state.connect);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="User">
      {showsection && (
        <section className="header">
          <h1>
            Welcome back <br />
            {connect.firstName} {connect.lastName}!
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
              <input
                type="text"
                id="user-name"
                name="user-name"
                onChange={(e) => setInputValue(e.target.value)}
              />
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "username/updateUserName",
                    payload: inputValue,
                  });
                  setShowsection(!showsection);
                }}
              >
                Save
              </button>
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
