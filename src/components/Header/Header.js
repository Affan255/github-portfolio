import React from "react";
import "./Header.css";
import logo from "../../GitHub-Mark-Light-64px.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My GitHub Portfolio</h1>
    </header>
  );
};
export default Header;
