import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import DetailScreen from "./components/DetailScreen";
import Diapatch from "./components/Diapatch";
import DisplayScreen from "./components/DisplayScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DisplayScreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<DetailScreen />} />
          <Route path="/dispatch" element={<Diapatch />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
