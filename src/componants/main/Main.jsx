import React from "react";
import Navbar from "../NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {" "}
        {/* This accounts for fixed nav */}
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
