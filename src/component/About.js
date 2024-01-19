import React from "react";
import Rectangle from "./Rectangle";
import Rectangle2 from "./Rectangle2";
import Rectangle3 from "./Rectangle3";

function AboutContent() {
    return (
      <div className="AboutContent">
        <Rectangle />
        <Rectangle2 />
        <Rectangle3 imageUrl="./component/job.jpg" />
      </div>
    );
}

export default AboutContent;
