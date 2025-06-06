import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../Icons/logo.png";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100px",
        padding: "20px 40px",
        boxSizing: "border-box",
        position: "relative",
        background: "#cccc",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <img src={logo} alt="logo" style={{ width: "160px", height: "auto" }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "60px",
        }}
      >
        <Link to="/our-talent" style={navLinkStyle}>
          OUR TALENT
        </Link>
        <Link to="/about" style={navLinkStyle}>
          ABOUT
        </Link>
        <Link to="/contact" style={navLinkStyle}>
          CONTACT
        </Link>
        <Link to="/book-talent" style={navLinkStyle}>
          BOOK TALENT
        </Link>
      </div>
    </div>
  );
};

const navLinkStyle = {
  fontSize: "20px",
  fontWeight: "500",
  color: "#1e2b3c",
  marginBottom: "20px",
  textDecoration: "none",
};

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginLeft: "0px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
