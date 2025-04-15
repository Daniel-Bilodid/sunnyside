import React, { useState } from "react";
import "./burger.scss";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "burger active" : "burger"}>
      <div className="burger__wrapper" onClick={handleClick}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
    </div>
  );
}

export default Burger;
