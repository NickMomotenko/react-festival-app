import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

import Video from "./sections/Video/Video";
import Preview from "./sections/Preview/Preview";
import MainContent from "./sections/MainContent/MainContent";
import Loading from "./sections/Loading/Loading";
import FullMenu from "./sections/FullMenu/FullMenu";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isActiveFullMenu, setIsActiveFullMenu] = useState(false);

  return (
    <div className="app">
      <Video isLoading={isLoading} setIsLoading={setIsLoading}></Video>
      <div className="container container--position">
        <Header />
        <Preview />
      </div>
      <div className="wrapper">
        <div className="container">
          <MainContent />
        </div>
      </div>
      <Loading videoState={isLoading} />
      <BurgerMenu
        isActiveFullMenu={isActiveFullMenu}
        setIsActiveFullMenu={setIsActiveFullMenu}
      />
      <FullMenu
        isActiveFullMenu={isActiveFullMenu}
        setIsActiveFullMenu={setIsActiveFullMenu}
      />
    </div>
  );
};

export default App;
