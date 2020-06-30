import React from "react";

import "./EventLabel.scss";

const EventLabel = () => {
  return (
    <div className="event-label">
      <div className="event-label__date">
        NOV 02 - 04<sup>TH</sup> 2020
      </div>
      <div className="event-label__city">NAMUR, BELGIUM</div>
    </div>
  );
};

export default EventLabel;
