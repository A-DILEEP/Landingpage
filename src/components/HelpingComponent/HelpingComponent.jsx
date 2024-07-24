import React from 'react'
import "./helpingComponent.css";
const HelpingComponent = ({img,count,text}) => {
  return (
    <div className="helping-component-container">
      <div className="helping-component-container-left">
        <img src={img} alt="people" />
      </div>
      <div className="helping-component-container-right">
        <div className="helping-component-container-count">
          {count}
        </div>
        <div className="helping-component-container-text">
          {text}
        </div>
      </div>
    </div>
  );
}

export default HelpingComponent
