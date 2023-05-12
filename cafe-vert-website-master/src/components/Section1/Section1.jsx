import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";
import "./Section1.css";
import Button from "../Button/Button";
import girlsImg from "./images/girls.png";
import prodBox from "./images/prod_three.png";
import coffeBeans from "./images/coffe_beans1.png";
import Languages from "../Languages/Languages";
const Section1 = () => {
  const [locale, changeLanguage] = useContext(LocaleContext);
  return (
    <section className="section1" name="principal_page">
      <Languages language={locale.language_select} changeLanguage={changeLanguage} />
      <div className="body-container">
        <div className="caffe-beans1">
          <img src={coffeBeans} alt="caffe beans" />
        </div>
        <div className="caffe-beans2">
          <img src={coffeBeans} alt="caffe beans" />
        </div>
        <div className="girls">
          <img src={girlsImg} alt="girls pic" />
        </div>
        <div className="body-poster">
          <a href="tel:+213556053019">
            <i class="fa fa-phone fa_custom" /> 0556053019
          </a>
          <h3>{locale.s1Title1}</h3>
          <h2>{locale.s1Title2}</h2>
          <h1>{locale.s1Title3}</h1>
          <div className="fast_eff">
            <h4>{locale.s1Title4}</h4>
          </div>
          <ul className="fast_item">
            <li>
              {locale.s1List1}
              <p>{locale.s1List1d}</p>
            </li>
            <li>
              {locale.s1List2}
              <p>{locale.s1List2d}</p>
            </li>
            <li>
              {locale.s1List3}
              <p> {locale.s1List3d}</p>
            </li>
            <li>
              {locale.s1List4}
              <p> {locale.s1List4d}</p>
            </li>
          </ul>
          <div className="prod-info-box">
            <div className="prod-info-img">
              <img src={prodBox} alt="prod pic" />
              <Button productCount={0} className="order-button" />
            </div>
            <div className="prod-info-price">
              <h5>{locale.currency}</h5>
              <div className="price_box neucha">
                <span>3990</span> DZD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
