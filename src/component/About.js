import React from "react";
import ImgWithShadow from "./about/Aboutimg";
import AboutText from "./about/AboutText";
import Aboutmenu from "./about/Aboutmenu";
import Aboutmenu2 from "./about/Aboutmenu2";

function AboutContent() {
  return (
    <div className="AboutContent">
      <div className="w-full lg:max-w-2xl mx-auto lg:mx-48 lg:mt-52">
        <ImgWithShadow />
      </div>
      <div className="w-full mx-auto max-w-screen-xl -mt-96">
        <AboutText />
      </div>
      <div className="lg:absolute lg:right-40 lg:mt-20 lg:-translate-y-1/2">
        <Aboutmenu />
      </div>
      <div className="lg:absolute lg:right-96 lg:mt-16 lg:-translate-y-1/2">
        <Aboutmenu2 />
      </div>
    </div>
  );
}

export default AboutContent;
