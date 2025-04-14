import React from "react";
import milkbottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../../assets/desktop/image-gallery-orange.jpg";
import cone from "../../assets/desktop/image-gallery-cone.jpg";
import sugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        <img src={milkbottles} alt="milkbottles" className="gallery__img" />
        <img src={orange} alt="orange" className="gallery__img" />
        <img src={cone} alt="cone" className="gallery__img" />
        <img src={sugarcubes} alt="sugarcubes" className="gallery__img" />
      </div>
    </div>
  );
}

export default Gallery;
