import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";
import "./Section6.css";
import iconsImg from "./images/icons_01.png";
import womanImg from "./images/women.png";
const Section6 = () => {
  const [locale] = useContext(LocaleContext);
  return (
    <section className="section6" name="instructions">
      <div className="section6-1">
        <h2>{locale.s4_27}</h2>
        <h3>
        {locale.s4_28}
          <span> Café Vert. </span>
        </h3>
      </div>

      <div className="section6-2">
      <div className="section6-2-body">

      </div>
        <div className="section6-2-circle">
          <h4>{locale.s4_40}</h4>
          <h3>{locale.s4_41}</h3>
          <h4>{locale.s4_42}</h4>
        </div>

        <h3>
          {locale.s4_29}
          <span>{locale.s4_29d}</span>
        </h3>
        <h2>{locale.s4_30}</h2>
        <p>{locale.s4_31}</p>
        <div className="go-box">
          <h4>
            <span>{locale.s4_32}</span>
          </h4>
          <h5>
            <span>{locale.tryNow}</span>
          </h5>
        </div>
        <img className="icons-container-woman" src={womanImg} alt="icons" />
      </div>

      <div className="icons-container">
        <img src={iconsImg} alt="icons" />
      </div>
      <div className="section6-3" />
      <div className="section6-4" />
    </section>
  );
};

export default Section6;
