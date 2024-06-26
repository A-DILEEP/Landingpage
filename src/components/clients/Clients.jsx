import React from 'react'
import './client.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
const Clients = () => {
  return (
    <div className="clients">
      <div className="heading">Our Clients</div>
      <div className="subtext">
        We have been working with some Fortune 500+ clients
      </div>
      <div className="logos">
        <img src={img1} alt="1" />
        <img src={img2} alt="2" />
        <img src={img3} alt="3" />
        <img src={img4} alt="4" />
        <img src={img5} alt="5" />
        <img src={img6} alt="6" />
      </div>
    </div>
  );
}

export default Clients
