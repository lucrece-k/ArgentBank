import Account from "../../components/Account";
import "./style.scss";
function User() {
  return (
    <div className="User">
      <section className="header">
        <h1>
          Welcome back <br />
          Prenom Nom!
        </h1>
        <button>Edit Name</button>
      </section>
      <Account />
      <Account />
      <Account />
    </div>
  );
}
export default User;
