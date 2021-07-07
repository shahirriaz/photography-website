import React, { useState } from "react";
import "./MobileNavigation.css";
import { useTransition, animated } from "react-spring";

function MobileNavigation({ click }) {
  const handleClick = () => {
    console.log("Click");
  };

  const [showMenu, setShowMenu] = useState(false);

  return <div></div>;
}

export default MobileNavigation;
