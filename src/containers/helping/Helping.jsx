import React from 'react'
import './helping.css'
import HelpingComponent from '../../components/helping component/HelpingComponent'
const Helping = () => {
  return (
    <div className="helping">
      <div className="helping-left">
        <div className="helping-left-heading">
          Helping a local <br /> <span>business reinvent itself</span>
        </div>
        <div className="helping-left-text">
          We reached here with our hard work and dedication
        </div>
      </div>
      <div className="helping-right">
        <HelpingComponent />
        <HelpingComponent />
        <HelpingComponent />
        <HelpingComponent />
      </div>
    </div>
  );
}

export default Helping;
