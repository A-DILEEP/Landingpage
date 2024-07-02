import React from 'react'
import "./howtodesign.css";
import HowtoDesign from '../../assets/HowToDesign.png'
const Howtodesign = () => {
  return (
    <div className="HowToDesign">
      <div className="HowToDesign-left">
        <img src={HowtoDesign} alt="How2design" />
      </div>
      <div className="HowToDesign-right">
        <div className="HowToDesign-right-heading">
          <p>How to design your site footer like we did</p>
        </div>
        <div className="HowToDesign-right-content">
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
        </div>
        <div className="HowToDesign-right-button">
          <button className="LearnMore">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Howtodesign
