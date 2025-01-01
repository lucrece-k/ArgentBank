import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Layout from "./pages/Home/Layout/index.tsx";
import SignIn from "./pages/SignIn/index.tsx";
import User from "./pages/User/index.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
