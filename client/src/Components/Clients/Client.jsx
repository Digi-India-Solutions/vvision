import React from 'react';
import image1 from "../../Images/client/Polycab-LogoV2.png";
import image2 from "../../Images/client/both-logo-ess.png";
import image3 from "../../Images/client/logo-6-dark.png";
import image4 from "../../Images/client/logo-dark.png";
import image5 from "../../Images/client/logo.png";
import image6 from "../../Images/client/logo.svg";
import image7 from "../../Images/client/mandeep-cables-logo.png";
import image8 from "../../Images/client/oswalpump_logo-2.png";
import image9 from "../../Images/client/suyoglogo.png";
import image10 from "../../Images/client/footer-logo1.png";
import image11 from "../../Images/client/logo-WEtrRjl0VElhN2d3MWxYbFJXQUtvZz09.png";
import image12 from "../../Images/client/b8929143-6368-42a3-812d-d30c06918c6e.jpg";
import image13 from "../../Images/client/ab467a5d-2334-49ef-aaf6-48c8214a2a50.jpg";
import image14 from "../../Images/client/header_logo.png";
import image15 from "../../Images/client/tecop-india-bhiwadi-logo-pqrqyrklj1nulzj3okv46kyjenfwj5jphnpk2el0cy.png";
import "./Client.css";

const Client = () => {
  return (
    <>
      <div className="client-section">
        <h2>Our Clients</h2>
        <div className="client-grid">
          <div className="client-item"><img src={image1} alt="Client 1" /></div>
          <div className="client-item"><img src={image4} alt="Client 2" /></div>
          <div className="client-item"><img src={image3} alt="Client 3" /></div>
          <div className="client-item"><img src={image5} alt="Client 4" /></div>
          <div className="client-item"><img src={image2} alt="Client 5" /></div>
          <div className="client-item"><img src={image8} alt="Client 6" /></div>
          <div className="client-item"><img src={image7} alt="Client 7" /></div>
          <div className="client-item"><img src={image6} alt="Client 8" /></div>
          <div className="client-item"><img src={image9} alt="Client 7" /></div>
          <div className="client-item"><img src={image10} alt="Client 8" /></div>
          <div className="client-item"><img src={image11} alt="Client 8" /></div>
          <div className="client-item"><img src={image12} alt="Client 8" /></div>
          <div className="client-item"><img src={image13} alt="Client 8" /></div>
          <div className="client-item"><img src={image15} alt="Client 8" /></div>
          <div className="client-item"><img src={image14} alt="Client 8" style={{backgroundColor:"red"}}/></div>
        </div>
      </div>
    </>
  );
}

export default Client;
