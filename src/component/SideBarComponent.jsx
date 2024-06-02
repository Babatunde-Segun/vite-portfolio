// import React from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// function SideBarComponent() {
//   return (
//     <div>
//       <Sidebar
//         style={{
//           height: "100vh",
//         }}
//       >
//         <Menu>
//           <SubMenu label="Charts">
//             <MenuItem> Pie charts </MenuItem>
//             <MenuItem> Line charts </MenuItem>
//           </SubMenu>
//           <MenuItem> Documentation </MenuItem>
//           <MenuItem> Calendar </MenuItem>
//         </Menu>
//       </Sidebar>
//       ;
//     </div>
//   );
// }

// export default SideBarComponent;
import "./SideBarComponent.css";

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import fineMan from "../assets/portrait.avif";
import Button from "./Button/Button";

// import fineMan from "."

export default function SideBarComponent() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-heading-secondary">Babatunde Segun</h2>
      <div className="sidebar-img-container">
        <img className="sidebar-img" src={fineMan} alt="portfolio picture" />
      </div>

      <div className="detail-holding-container">
        <p>specialization:</p>
        <h4>Software development</h4>
      </div>

      <div className="detail-holding-container">
        <p>Based in:</p>
        <h4>Lagos, Nigeria</h4>
      </div>

      <div className="sidebar-icons-container">
        <div>
          <FaGithub className="sidebar-icon" />
        </div>
        <div>
          <FaInstagram className="sidebar-icon" />
        </div>
        <div>
          <FaLinkedinIn className="sidebar-icon" />
        </div>
        <div>
          <FaXTwitter className="sidebar-icon" />
        </div>
      </div>

      <div className="sidebar-button-container">
        <Button>Let's talk</Button>
      </div>
    </div>
  );
}
