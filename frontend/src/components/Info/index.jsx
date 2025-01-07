import "./style.scss";
function Info({ image, title, content }) {
  return (
    <li className="Info">
      <img src={image} alt="logo info" />
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
}
export default Info;
