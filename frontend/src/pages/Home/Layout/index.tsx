import { Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Header/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default Layout;
