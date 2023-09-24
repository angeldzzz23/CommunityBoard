import React from "react";

import reactLogo from '../assets/img_avatar.png';

import Favorite from './Favorite'

const Favorites = () => {
    return (
      <div>
        {/* First row of cards */}
        <div className="card-container">

          <Favorite name="Doctor" occupation="A doctor heals things" url="https://en.wikipedia.org/wiki/Doctor" />
          <Favorite name="Engineer" occupation="What do they really do?" url="https://en.wikipedia.org/wiki/Engineer" />
          <Favorite name="Teacher" occupation="They teach" url="https://en.wikipedia.org/wiki/Teacher" />

        </div>
  
        {/* Second row of cards */}
        <div style={{ marginTop: "20px" }}></div>
        <div className="card-container">
            <Favorite name="Programmer" occupation="they code" url="https://en.wikipedia.org/wiki/Programmer" />
            <Favorite name="Lawyer" occupation="they do law stuff" url="https://en.wikipedia.org/wiki/Lawyer" />
            <Favorite name="Police officer" occupation="Enforce the law" url="https://en.wikipedia.org/wiki/Police_officer" />
        </div>

        <div style={{ marginTop: "20px" }}></div>
        <div className="card-container">
            <Favorite name="Nurse" occupation="they heal things" url="https://www.nursingworld.org/practice-policy/workforce/what-is-nursing/" />
            <Favorite name="Architect" occupation="Architect " url="https://en.wikipedia.org/wiki/Architect" />
            <Favorite name="Unemployment" occupation="No JOB" url="https://edd.ca.gov/en/unemployment/" />
        </div>


      </div>
    );
  };
  
  export default Favorites;