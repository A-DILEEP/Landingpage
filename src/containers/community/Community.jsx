import React from 'react'
import communityComponent from '../../components/community component/communityComponent'
import "./community.css";
const Community = () => {
  return (
    <div className="community">
      <div className="community-heading">Manage your entire community</div>
      <div className="middletext">in a single system</div>
      <div className="community-subtext">Who is Nextcent suitable for?</div>
      <div className="boxes">
        <communityComponent />
      </div>
    </div>
  );
}

export default Community
