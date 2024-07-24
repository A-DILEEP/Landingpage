import React from "react";
import "./marketingComponent.css";
const MarketingComponent = ({ img, text }) => {
  return (
    <div className="marketingComponent">
      <img src={img} alt="mc1" />
      <div className="marketingComponent-box">
        <div className="text">{text}</div>
        <div className="readmore">
          <a href="#readmore">
            Readmore
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketingComponent;
