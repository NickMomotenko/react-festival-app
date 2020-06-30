import React, { useState, useEffect } from "react";

import "./Menu.scss";

const Menu = ({ setIsActiveFullMenu }) => {
  const [menu, setMenu] = useState([
    "Live!",
    "Programm",
    "About",
    "Team",
    "Sponsors",
  ]);
  const [isMenuActive, setIsMenuActive] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 768) {
        setIsMenuActive(false);
      }
    });
  });

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menu.map((item, index) => (
          <li className="menu__item" key={index}>
            <a
              href="#"
              className="menu__link"
              onClick={() => setIsActiveFullMenu(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
