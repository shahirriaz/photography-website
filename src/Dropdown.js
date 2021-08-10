import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./Dropdown.css";
import { NavLink } from "react-router-dom";

function Dropdown({ closeToggle }) {
  const array = ["familie", "portrett", "barn", "par", "gravid"];
  const ref = useDetectClickOutside({ onTriggered: closeToggle });
  return (
    <div className="dropdown-content" ref={ref}>
      {array.map(item => (
        <div key={item} className="dropdown-item">
          <NavLink to={`/galleri/${item}`}>
            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
