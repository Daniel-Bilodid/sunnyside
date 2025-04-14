import React from "react";
import "./advertisement.scss";

import egg from "../../assets/desktop/image-transform.jpg";
import stand from "../../assets/desktop/image-stand-out.jpg";
import cherry from "../../assets/desktop/image-graphic-design.jpg";
import orange from "../../assets/desktop/image-photography.jpg";

function Advertisement() {
  return (
    <section className="container">
      <div className="advertisement">
        <div className="advertisement__card">
          <div>
            <div className="advertisement__card-title">
              Transform your brand
            </div>
            <div className="advertisement__card-descr">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </div>
            <div className="advertisement__card-button">Learn more</div>
          </div>
          <div className="advertisement__img">
            <img src={egg} alt="egg" />
          </div>
        </div>

        <div className="advertisement__card">
          <div className="advertisement__img">
            <img src={stand} alt="egg" />
          </div>
          <div>
            <div className="advertisement__card-title">
              Stand out to the right audience
            </div>
            <div className="advertisement__card-descr">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </div>
            <div className="advertisement__card-button">Learn more</div>
          </div>
        </div>

        <div className="advertisement__card">
          <div className="advertisement__img">
            <img src={cherry} alt="cherry" />
            <div className="advertisement__img-wrapper">
              <div className="advertisement__img-title green__title">
                Graphic Design
              </div>
              <div className="advertisement__img-descr green__descr">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </div>
            </div>
          </div>
          <div className="advertisement__img">
            <img src={orange} alt="orange" />
            <div className="advertisement__img-wrapper">
              <div className="advertisement__img-title blue__title">
                Photography
              </div>
              <div className="advertisement__img-descr blue__descr">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advertisement;
