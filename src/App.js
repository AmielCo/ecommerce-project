import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./components/routes/navigation/Navigation";
import Home from "./components/routes/home/Home";
import SignIn from "./components/routes/signin/SignIn";

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
