import React from "react";
import backgroundSW from "../../images/sw-background-vid.mp4";

const VidContent = () => {
  return (
    <div className="video-container">
      <div className="content">
        <h1>Witness the biggest conflict in the galaxy.</h1>
      </div>
      <video autoPlay muted loop className="video-content">
        <source src={backgroundSW} type="video/mp4" />
        test
      </video>
    </div>
  );
};

export default VidContent;
