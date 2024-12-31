import Banner from "./components/Header/Banner/index.js";
import Header from "./components/Header/index.js";
import Info from "./components/Header/Info/index.js";
import "./App.css";
import Footer from "./components/Header/Footer/index.js";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <section className="sectionInfo">
        <Info />
        <Info />
        <Info />
      </section>
      <Footer />
    </>
  );
}

export default App;
