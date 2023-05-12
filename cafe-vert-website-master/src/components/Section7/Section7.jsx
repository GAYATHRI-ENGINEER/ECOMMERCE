import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";
import "./Section7.css";
import coffeeGirl from "./images/girl_coffee.png";
import normalCoffeePic from "./images/green_01.png";
import greenCoffeePic from "./images/green_02.png";

const Section7 = () => {
  const [locale] = useContext(LocaleContext);
  return (
    <section className="section7" name="diet">
      <div className="coffee-girl-container">
        <div className="coffee-girl">
          <img src={coffeeGirl} alt="coffee girl" />
        </div>
        <div className="section7-body">
          <h3>Café Vert</h3>
          <h2>{locale.s4_33}</h2>
          <p>{locale.s4_34}</p>
        </div>
      </div>

      <div className="section7-green">
        <div className="section7-green-images"> 
          <div className="green-coffee-pic">
            <img src={greenCoffeePic} alt="green coffee" />
            <span className="green-coffee-title"> Café Vert </span>
          </div>
          <div className="normal-coffee-pic">
            <img src={normalCoffeePic} alt="normal coffee" />
            <span className="green-coffee-title"> {locale.s4_43} </span>
          </div>
        </div>

        <div className="section7-green-titles">
          <h2>{locale.s4_35}</h2>
          <h3>{locale.s4_36}</h3>
          <h4>{locale.s4_37}</h4>
        </div>
      </div>
      <div className="section7-black">
        <h2>{locale.s4_38}</h2>
        <h3>{locale.s4_39}</h3>
      </div>
    </section>
  );
};

export default Section7;
