import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return <div className="sidebar">
      <ul>
          <li className="active"><Link to="/">Upcoming Movies</Link></li>
          <li><Link to="/blogs">Movie News</Link></li>
          <li><Link to="/create-blog">Create Blog</Link></li>
      </ul>
  </div>;
}

export default Sidebar;
