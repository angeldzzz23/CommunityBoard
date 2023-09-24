import React from "react";

import reactLogo from '../assets/img_avatar.png';
const Favorites = () => {
    return (
      <div>
        {/* First row of cards */}
        <div className="card-container">
          <div className="card">
            <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
              <a href="sometext">
                <button>More Information</button>
              </a>
            </div>
          </div>
  
          <div className="card">
            <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
              <a href="sometext">
                <button>More Information</button>
              </a>
            </div>
          </div>
  
          <div className="card">
            <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
              <a href="sometext">
                <button>More Information</button>
              </a>
            </div>
          </div>
        </div>
  
        {/* Second row of cards */}
        <div style={{ marginTop: "20px" }}></div>
        <div className="card-container">
          <div className="card">
            <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4><b>Jane Smith</b></h4>
              <p>Designer</p>
              <a href="sometext">
                <button>More Information</button>
              </a>
            </div>
          </div>
  
          <div className="card">
            <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4><b>Jane Smith</b></h4>
              <p>Designer</p>
              <a href="sometext">
                <button>More Information</button>
              </a>
            </div>
          </div>
  
          <div className="card">
            <img src={reactLogo} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4><b>Jane Smith</b></h4>
              <p>Designer</p>
              <a href="sometext">
                <button>More Information</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    );
  };
  
  export default Favorites;