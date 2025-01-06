import "./style.scss";
function Account({ title, somme, sousTitre }) {
  return (
    <section className="Account">
      <div>
        <h3>{title} </h3>
        <p>{somme}</p>
        <p>{sousTitre}</p>
      </div>
      <button>View transactions</button>
    </section>
  );
}
export default Account;
