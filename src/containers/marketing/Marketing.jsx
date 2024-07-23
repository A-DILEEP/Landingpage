import React from "react";
import "./marketing.css";
import MarketingComponent from "../../components/marketing component/MarketingComponent";
import marketing1 from "../../assets/marketing1.png";
import marketing2 from "../../assets/marketing2.png";
import marketing3 from "../../assets/marketing3.png";
const Marketing = () => {
  return (
    <section>
      <div className="marketing">
        <div className="marketingTop">
          <div className="marketingHeading">
            <p>Caring is the new marketing</p>
          </div>
          <div className="marketingHead-normalText">
            <p>
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
        </div>
        <div className="marketingBottom">
          <MarketingComponent
            img={marketing1}
            text="Creating Streamlined Safeguarding Processes with OneRen"
          />
          <MarketingComponent
            img={marketing2}
            text="What are your safeguarding responsibilities and how can you manage them?"
          />
          <MarketingComponent
            img={marketing3}
            text="Revamping the Membership Model with Triathlon Australia"
          />
        </div>
      </div>
    </section>
  );
};

export default Marketing;
