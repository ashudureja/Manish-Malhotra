import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";

import Work2 from "./Components/Work2";
import Playreel from "./Components/Playreel";
import Images from "./Components/Images";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Sample from "./Components/Sample";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./Components/Hero";
import { useState } from "react";
import Video from "./Components/Video";

const App = () => {
  const scroll = new LocomotiveScroll();
  const [main, showMain] = useState(false);

  const func = () => {
    showMain(true);
  }
  return (
    <div className="w-full">
      {!main ? (
        <Hero func={func}/>
      ) : (
        <>
          <Video main={main} />
          <Work2 />
          
          <Playreel />
          <Images />
          <News/>
          <Footer/>
          
          
        </>
      )}
    </div>
  );
};

export default App;
