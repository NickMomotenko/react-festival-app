import React from "react";

import "./Logo.scss";

import classNames from "classnames";

const Logo = ({ load }) => {
  return (
    <div
      className={classNames("logo", {
        "logo--loading": load,
      })}
    >
      <a href="#" className="logo__link">
        <img
          src={require("../../assets/logo/2.png")}
          alt="Logo Icon"
          className="logo__link-icon"
        />
        <div className="logo__link-text">
          Gorilla <br /> Pappi
        </div>
      </a>
    </div>
  );
};

export default Logo;
