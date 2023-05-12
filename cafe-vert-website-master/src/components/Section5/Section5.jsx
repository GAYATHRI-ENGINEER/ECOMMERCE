import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";
import "./Section5.css";
import greenBean from "./images/obj_03.png";
import greenBean2 from "./images/obj_05.png";
import prodPic from "../Section3/images/prod.png";
import woman from "./images/women_tea.png";
import checkPic from "../Section1/images/check_03.png";
import Button from '../Button/Button'

const Section5 = () => {
  const [locale] = useContext(LocaleContext);
  return (
    <section className="section5" name="ingredients">
      <div className="section5-1">
        <div className="section5-left">
          <div>
            <h2>{locale.s4_1}</h2>
            <p>{locale.s4_2}</p>
            <h3>{locale.s4_3}</h3>
            <p>{locale.s4_4}</p>
          </div>
          <div className="green-bean-form">
            <img src={greenBean} alt="green bean" />
            <h4>
              <span>{locale.s4_5}</span>
              <span>{locale.s4_6}</span>
              <span>{locale.s4_7}</span>
            </h4>
            <span>{locale.s4_8}</span>
          </div>
          <div>
            <h3>{locale.s4_9}</h3>
            <p>{locale.s4_10}</p>
            <h3>{locale.s4_11}</h3>
            <p>{locale.s4_12}</p>
            <p>{locale.s4_12d}</p>
          </div>
        </div>
        <div className="section5-right">
          <div className="section5-right-woman">
            <img src={woman} alt="woman tea" />
            <div>
              <h3>{locale.s4_13}</h3>
              <h2>{locale.s4_14}</h2>
              <h4>{locale.tryNow}</h4>
              <p>{locale.s4_16}
              </p>
            </div>
          </div>

          <div className="section5-right-bg">
            <div className="section5-right-titles">
              <div>
                <img src={checkPic} alt="check" />
                <p>{locale.s4_17}</p>
              </div>
              <div>
                <img src={checkPic} alt="check" />
                <p>{locale.s4_18}</p>
              </div>
              <div>
                <img src={checkPic} alt="check" />
                <p>{locale.s4_19}</p>
              </div>
              <div>
                <img src={checkPic} alt="check" />
                <p>{locale.s4_20}</p>
              </div>
            </div>
            <div className="section5-right-prod">
              <div className="section5-right-prod-price neucha">
                <p>3990 DZD</p>
                <Button productCount={0} className="order-button-form"/>
              </div>
              <div className="section5-right-prod-img">
                <img src={prodPic} alt="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section5-2">
        <div className="section5-2-header">
          <h3>{locale.s4_21}</h3>
          <h2>{locale.s4_22}</h2>
        </div>
        <div className="section5-2-body">
          <div className="section5-2-body-left">
            <h3>
              {" "}
              <b>Café</b> Vert{" "}
            </h3>
            <p>{locale.s4_26}</p>
          </div>
          <div className="section5-2-body-right">
            <img src={greenBean2} alt="green bean" />
            <div>
              <h3>{locale.s4_23}</h3>
              <h4>{locale.s4_24}</h4>
              <h3>{locale.s4_25}</h3>
              <Button productCount={0} className="order-button-form"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
