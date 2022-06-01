
import React from "react";
import Items from "./Items";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ show , setStatus}) => {
  const { right } = useSpring({
    from: { right: "100%" },
    right: show ? "80" : "96.3%"
  });
  return (
    <animated.div style={{ right: right }} className="Sidebar">
      <Items className="Items" />
      <button className="Button" onClick={() => setStatus(status => !status)}>
        <FontAwesomeIcon size="2x" icon={faBars} />
      </button>
    </animated.div>
  );
};

export default Sidebar;