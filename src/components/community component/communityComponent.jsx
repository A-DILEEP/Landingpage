import React from 'react'
import './communityComponent.css'
const CommunityComponent = ({img,heading,subtext}) => {
  return (
    <div className="communitycomponent">
      <div className="img">
        <img src={img} alt="pixel" />
      </div>
      <div className="main-heading">
        {heading}
      </div>
      <div className="community-subtext1">
        {subtext}
      </div>
    </div>
  )
}

export default CommunityComponent;
