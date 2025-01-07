import "./style.scss";
function Account({ title, somme, sousTitre }) {
  return (
    <section className="Account">
      <li>
        <h3>{title} </h3>
        <p className="somme">{somme}</p>
        <p>{sousTitre}</p>
      </li>
      <button>View transactions</button>
    </section>
  );
}
export default Account;
