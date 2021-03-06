import React from "react";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
