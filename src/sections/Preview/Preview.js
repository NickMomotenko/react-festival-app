import React from "react";

import EventLabel from "../../components/EventLabel/EventLabel";
import Socials from "../../components/Socials/Socials";

import "./Preview.scss";

const Preview = () => {
  return (
    <div className="preview">
      <div className="preview__content">
        <EventLabel />
        <Socials />
      </div>
    </div>
  );
};

export default Preview;
