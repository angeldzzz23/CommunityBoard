import React from "react";

import reactLogo from '../assets/img_avatar.png';


const Favorite = (props) => {
  return (
    <div className="card">
      <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4><b>{props.name}</b></h4>
        <p>{props.occupation}</p>
        <a href={props.url}>
          <button>More Information</button>
        </a>
      </div>
    </div>
  );
};

export default Favorite;