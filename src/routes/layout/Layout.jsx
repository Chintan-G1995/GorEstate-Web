import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="content">
      <Outlet/>
      </div>
    </div>
  );
};

export default layout;
