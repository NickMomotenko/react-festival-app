import React, { useState, useRef, useEffect } from "react";

import { useSpring, animated } from "react-spring";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

import "./OurTeam.scss";

import classNames from "classnames";

const OurTeam = () => {
  const [team, setTeam] = useState([
    {
      id: Math.random().toString(),
      fullname: "Alex Howell",
      avatar: require("../../assets/team/1.jpg"),
      position: "SCIENCE FICTION AUTHOR",
      desc:
        "Alex Howell is an American science fiction author, journalist, editor and critic, best known for his... ",
    },
    {
      id: Math.random().toString(),
      fullname: "Bruce Sterling",
      avatar: require("../../assets/team/2.jpg"),
      position: "DESIGNER",
      desc:
        "Alex Howell is an American science fiction author, journalist, editor and critic, best known for his... ",
    },
    {
      id: Math.random().toString(),
      fullname: "Ingrid Burrington",
      avatar: require("../../assets/team/3.jpg"),
      position: "ARTIST, WRITER",
      desc:
        "Ingrid Burrington is an American science fiction author, journalist, ARTIST, WRITER... ",
    },
  ]);

  const [tabletSize, setTabletSize] = useState(false);

  useEffect(() => {
    if (document.documentElement.clientWidth < 768) {
      setTabletSize(true);
    } else {
      setTabletSize(false);
    }

    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth < 768) {
        setTabletSize(true);
      } else {
        setTabletSize(false);
      }
    });
  });

  return (
    <div className="our-team">
      <Title title="Our team" />
      <ul className="our-team__list">
        {team.map((item, index) => (
          <OurTeamItem
            key={item.id}
            tabletSize={tabletSize}
            index={index}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
};

const OurTeamItem = ({
  index,
  avatar,
  fullname,
  position,
  desc,
  tabletSize,
}) => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 10}px,0)`;
  const trans3 = (x, y) =>
    `translate3d(${x / 10}px,${y / 10}px,0) skewY(-37.5deg)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  let liRef = useRef(null);
  return (
    <li
      className={classNames("our-team__item", {
        "our-team__item--even": ++index % 2 == 0,
      })}
      ref={liRef}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="our-team__avatar"
        style={{ transform: tabletSize ? 'none' :  props.xy.interpolate(trans1) }}
      >
        <img src={avatar} alt="Avatar Icon" className="our-team__avatar-icon" />
        <animated.span
          className="our-team__avatar-line our-team__avatar-line--top"
          style={{ transform: tabletSize ? 'none' : props.xy.interpolate(trans3) }}
        ></animated.span>
        <animated.span
          className="our-team__avatar-line our-team__avatar-line--bottom"
          style={{ transform: tabletSize ? 'none' : props.xy.interpolate(trans3) }}
        ></animated.span>
      </animated.div>
      <animated.div
        className="our-team__info"
        style={{ transform: tabletSize ? 'none' : props.xy.interpolate(trans2) }}
      >
        <div className="our-team__fullname">{fullname}</div>
        <div className="our-team__position">{position}</div>
        <div className="our-team__desc">{desc}</div>
        <div className="our-team__button">
          <Button title="More info" />
        </div>
      </animated.div>
    </li>
  );
};

export default OurTeam;
