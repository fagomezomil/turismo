import React from "react";
import "../css/side-nav.css"
import Idea from "../img/idea.svg"

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div> I slide into view </div>
      <div> Me Too! </div>
      <div> Me Three! </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
      <img src={Idea} alt="" />
      </button>
    </div>
  );
};
export default SideBar;