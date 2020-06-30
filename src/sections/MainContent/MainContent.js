import React from "react";

import OurTeam from "../OurTeam/OurTeam";
import WhatIsNew from "../WhatIsNew/WhatIsNew";
import News from "../News/News";
import Footer from "../Footer/Footer";

import "./MainContent.scss";

const MainContent = () => {
  return (
    <div className="main-content">
      <WhatIsNew />
      <OurTeam />
      <News />
      <Footer />
    </div>
  );
};

export default MainContent;
