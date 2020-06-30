import React, { useState } from "react";

import "./Socials.scss";

import vkIcon from '../../assets/socials/vk.svg';
import twIcon from '../../assets/socials/twitter.svg';
import instIcon from '../../assets/socials/instagram.svg';
import vimeoIcon from '../../assets/socials/vimeo.svg';

const Socials = () => {
  const [socials, setSocials] = useState([
    {
      id:1,
      name: "Vk",
      icon: vkIcon,
    },
    {
      id:2,
      name: "Instagram",
      icon: instIcon,
    },
    {
      id:3,
      name: "Twitter",
      icon: twIcon,
    },
    {
      id:4,
      name: "Vimeo",
      icon: vimeoIcon,
    },
  ]);
  return (
    <div className="socials">
      <div className="socials__title">Follow us</div>
      <ul className="socials__list">
        {socials.map(({ icon, name }, index) => (
          <li className="socials__item" key={index}>
            <a href="#" className="socials__link" title={name}>
              <img src={icon} alt="Socials Icon" className="socials__icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
