import React, { useState, useEffect } from "react";

import Logo from "../../components/Logo/Logo";

import "./Loading.scss";

import classNames from "classnames";

const Loading = ({ videoState }) => {
  const [loading, setLoading] = useState(videoState);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [indicatorText, setIndicatorText] = useState("Loading...");
  const [readyToAnimate, setReadyToAnimate] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIndicatorText("Ready...");

        setTimeout(() => {
          setIsLogoVisible(false);

          setTimeout(() => {
            setReadyToAnimate(true);
          }, 500);
        }, 1000);
      }, 2000);
    }
  }, [loading]);

  return (
    <div
      className={classNames("load-section", {
        "load-section--animate": readyToAnimate,
      })}
    >
      <div className="load-section__col"></div>
      <div className="load-section__col load-section__col--right"></div>

      <div className="load-section__center">
        <div className="load-section__logo">
          {isLogoVisible ? <Logo load /> : null}
        </div>
        {isLogoVisible ? (
          <LoadingIndicator indicatorText={indicatorText} />
        ) : null}
      </div>
    </div>
  );
};

const LoadingIndicator = ({ indicatorText }) => {
  return <div className="load-section__indicator">{indicatorText}</div>;
};

export default Loading;
