import React from 'react'
import "./pixel.css";
import pixelimg from '../../assets/pixelimg.png'
const Pixelgrade = () => {
  return (
    <div className="pixelgrade">
      <div className="left">
        <div className="pixel-img">
          <img src={pixelimg} alt="pixelimg" />
        </div>
      </div>
      <div className="right">
        <div className="pixel-heading">
          The unseen of spending three <br/> years at Pixelgrade
        </div>
        <div className="pixel-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </div>
        <div className="pixel-button"><button>Learn More</button></div>
      </div>
    </div>
  );
}

export default Pixelgrade
