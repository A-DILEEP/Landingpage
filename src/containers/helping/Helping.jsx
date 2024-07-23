import React from "react";
import "./helping.css";
import HelpingComponent from "../../components/helping component/HelpingComponent";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
const Helping = () => {
  return (
    <section>
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
          <HelpingComponent img={h1} text="Members" count="2,245,341" />
          <HelpingComponent img={h2} text="Clubs" count="46,328" />
          <HelpingComponent img={h3} text="Event Booking" count="828,867" />
          <HelpingComponent img={h4} text="Payments" count="1,926,436" />
        </div>
      </div>
    </section>
  );
};

export default Helping;
