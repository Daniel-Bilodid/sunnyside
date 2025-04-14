import React from "react";
import "./testimonials.scss";
import emily from "../../assets/image-emily.jpg";
import thomas from "../../assets/image-thomas.jpg";
import jennie from "../../assets/image-jennie.jpg";

function Testimonials() {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">CLIENT TESTIMONIALS</h2>

      <div className="testimonials__wrapper">
        <div className="testimonials__card">
          <img className="testimonials__card-img" src={emily} alt="Emily" />
          <div className="testimonials__card-descr">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </div>

          <div>
            <p className="testimonials__card-name">Emily R.</p>
            <p className="testimonials__card-role">Marketing Director</p>
          </div>
        </div>

        <div className="testimonials__card">
          <img className="testimonials__card-img" src={thomas} alt="Thomas" />
          <div className="testimonials__card-descr">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </div>

          <div>
            <p className="testimonials__card-name">Thomas S.</p>
            <p className="testimonials__card-role">Chief Operating Officer</p>
          </div>
        </div>

        <div className="testimonials__card">
          <img className="testimonials__card-img" src={jennie} alt="Jennie" />
          <div className="testimonials__card-descr">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </div>

          <div>
            <p className="testimonials__card-name">Jennie F.</p>
            <p className="testimonials__card-role">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
