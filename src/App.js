import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
  // const dispatch = useDispatch();


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}


export default App;