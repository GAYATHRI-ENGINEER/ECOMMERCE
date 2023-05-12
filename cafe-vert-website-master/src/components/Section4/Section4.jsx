import React ,{useContext} from "react";
import { LocaleContext } from "../../LocaleContext";
import "./Section4.css";
import prodPic from "../Section1/images/prod_three.png";
import Button from '../Button/Button'

const Section4 = () => {
  const [locale] = useContext(LocaleContext);

  return (
    <section className="section4">
      <div className="prod-pic-4">
        <img src={prodPic} alt="product" />
      </div>
      <div className="prod-info-4">
        <div className="">
          <div className="price_info_box">
            <h3>{locale.fourProd}</h3>
            <h4>
              <span className="green-rounded">{locale.payOnReceive}</span>
            </h4>
          </div>
          <div className="price_box neucha">
            <b>
              <span>15000</span> DZD
            </b>
            <p> {locale.freeDelivery} </p>
          </div>
          <div className="btn_box">
            <Button productCount={3} className="order-button-form"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
