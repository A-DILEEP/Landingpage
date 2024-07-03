import React from "react";
import "./community.css";
import hands from "../../assets/hands.png";
import people from "../../assets/people.png";
import building from "../../assets/building.png";
import CommunityComponent from '../../components/community component/communityComponent'

const Community = () => {
  return (
    <div className="community" id="community">
      <div className="community-heading">Manage your entire community</div>
      <div className="middletext">in a single system</div>
      <div className="community-subtext">Who is Nextcent suitable for?</div>
      <div className="boxes">
        <CommunityComponent
          img={hands}
          heading="Membership Organisations"
          subtext="Our membership management software provides full automation of membership renewals and payments"
        />
        <CommunityComponent
          img={people}
          heading="National Associations"
          subtext="Our membership management software provides full automation of membership renewals and payments"
        />
        <CommunityComponent
          img={building}
          heading="Clubs And Groups"
          subtext="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </div>
  );
};

export default Community;
