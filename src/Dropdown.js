import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./Dropdown.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

function Dropdown({ closeToggle }) {
  const ref = useDetectClickOutside({ onTriggered: closeToggle });
  return (
    <div className="dropdown" ref={ref}>
      <div class="dropdown-content">
        <NavLink to="/gallery/par">
          <div>
            <a>Par</a>
          </div>
        </NavLink>
        <NavLink to="/gallery/familie">
          <div>
            <a>Familie</a>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Dropdown;
