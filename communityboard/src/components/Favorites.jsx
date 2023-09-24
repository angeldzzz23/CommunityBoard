import React from "react";

import reactLogo from '../assets/img_avatar.png';

import Favorite from './Favorite'

const Favorites = () => {
    return (
      <div>
        {/* First row of cards */}
        <div className="card-container">

          <Favorite name="John Doe" occupation="Architect & Engineer" url="https://example.com/john-doe" />
          <Favorite name="John Doe" occupation="Architect & Engineer" url="https://example.com/john-doe" />
          <Favorite name="John Doe" occupation="Architect & Engineer" url="https://example.com/john-doe" />

        </div>
  
        {/* Second row of cards */}
        <div style={{ marginTop: "20px" }}></div>
        <div className="card-container">
            <Favorite name="John Doe" occupation="Architect & Engineer" url="https://example.com/john-doe" />
            <Favorite name="John Doe" occupation="Architect & Engineer" url="https://example.com/john-doe" />
            <Favorite name="John Doe" occupation="Architect & Engineer" url="https://example.com/john-doe" />
        </div>


      </div>
    );
  };
  
  export default Favorites;