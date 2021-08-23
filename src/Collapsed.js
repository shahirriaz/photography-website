import React from "react";
import { Transition, animated } from "react-spring";
// import css from './collapse.scss'

const baseStyles = {
  background: "rgba(255,0,0,.2)",
  overflow: "hidden",
  height: 0,
};
const openStyles = {
  height: "auto",
  opacity: 1,
};
const collapsedStyles = {
  height: 0,
  opacity: 0,
};
const animationConfig = {
  duration: 1000,
};
const Collapse = ({ collapsed, children, ...props }) => {
  return (
    <Transition
      items={collapsed}
      native
      config={animationConfig}
      from={baseStyles}
      enter={openStyles}
      leave={collapsedStyles}
      // onFrame={console.log}
      {...props}
    >
      {collapsed =>
        !collapsed
          ? style => <animated.div style={style} children={children} />
          : null
      }
    </Transition>
  );
};

export default Collapse;
