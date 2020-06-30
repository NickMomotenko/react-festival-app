import React from "react";

import "./FullMenu.scss";

import Menu from "../../components/Menu/Menu";

import classNames from "classnames";

const FullMenu = ({ isActiveFullMenu, setIsActiveFullMenu }) => {
  return (
    <div
      className={classNames("full-menu", {
        'open': isActiveFullMenu,
      })}
    >
      <Menu setIsActiveFullMenu={setIsActiveFullMenu} />
    </div>
  );
};

export default FullMenu;
