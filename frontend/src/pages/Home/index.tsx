import Banner from "../../components/Header/Banner";
import Info from "../../components/Header/Info";
import "./style.scss";

function Home() {
  return (
    <>
      <Banner />
      <section className="sectionInfo">
        <Info />
        <Info />
        <Info />
      </section>
    </>
  );
}
export default Home;
