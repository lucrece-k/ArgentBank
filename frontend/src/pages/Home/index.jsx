import Banner from "../../components/Banner";
import Info from "../../components/Info";
import "./style.scss";
import infoData from "../../info.json";
function Home() {
  return (
    <>
      <Banner />
      <section className="sectionInfo">
        <ul>
          {infoData.map((info) => (
            <Info
              key={info.id}
              image={info.image}
              title={info.title}
              content={info.content}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
export default Home;
