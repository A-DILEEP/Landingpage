import React from 'react'
import "./customers.css";
import teslabuds from '../../assets/teslabuds.png'
import img11 from '../../assets/11.png'
import img22 from '../../assets/22.png'
import img33 from "../../assets/33.png";
import img44 from "../../assets/44.png";
import img55 from "../../assets/55.png";
import img66 from "../../assets/66.png";
const Customers = () => {
  return (
    <div className="customers">
      <div className="customers-left">
        <img src={teslabuds} alt="teslabuds" />
      </div>
      <div className="customers-right">
        <div className="customers-right-text">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
        </div>
        <div className="customers-right-head">
          <p>Tim Smith</p>
        </div>
        <div className="customers-right-head-text">
          <p>British Dragon Boat Racing Association</p>
        </div>
        <div className="customers-right-vendors">
          <img src={img11} alt="first" />
          <img src={img22} alt="first" />
          <img src={img33} alt="first" />
          <img src={img44} alt="first" />
          <img src={img55} alt="first" />
          <img src={img66} alt="first" />
        </div>
      </div>
    </div>
  );
}

export default Customers
