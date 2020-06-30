import React from "react";
import { useSpring, animated } from "react-spring";

import Title from "../../components/Title/Title";

import "./WhatIsNew.scss";

const WhatIsNew = () => {
  return (
    <div className="what-new">
      <div className="what-new__subtitle">GorillaPappi 2020</div>
      <Title title="What’s New this year?" />
      <div className="what-new__text">
        This year, the legendary Hungarian festival Sziget celebrates its 25th
        anniversary, so the extravaganza is expected to be cooler than usual! A
        whole week of performances by cult and young groups, a sea of
        ​​entertainment, new acquaintances - it is not in vain that Sziget is
        considered the brightest and largest movement in all of Europe. In
        previous years, it took place in June, and in 2019 it will be held from
        August 7 to 13, so it's time to start the training camp. The festival
        venue is the permanent island of Obuda in Budapest.
      </div>
    </div>
  );
};

export default WhatIsNew;
