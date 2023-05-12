import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";

import "./ProductForm.css";
import prodPic from "./images/prod.png";
import threeProdPic from "../Section1/images/prod_three.png";
import Button from '../Button/Button'

const ProductForm = ({ count }) => {

  const [locale] = useContext(LocaleContext);

  let countClass;
  let countPic;
  let titleText;
  let priceText;

  switch (count) {
    case 2:
      countClass = "two-products";
      countPic = prodPic;
      titleText = locale.twoProd;
      priceText = "9000 DZD";
      break;
    case 3:
      countClass = "three-products";
      countPic = threeProdPic;
      titleText = locale.threeProd;
      priceText = "12000 DZD";
      break;

    default:
      countClass = "";
      countPic = prodPic;
      titleText = locale.oneProd;
      priceText = "3990 DZD";
      break;
  }

  return (
    <div className="product-form">
      <div className="pf-head">
        <div className="pf-pay">
          <div>
            <b> Café </b> Vert
          </div>
          <h5 className="green-rounded">{locale.payOnReceive} </h5>
        </div>
        <div className="pf-title">
          <h3>{titleText}</h3>
        </div>
      </div>
      <div className="pf-body neucha">
        <div className={"pf-picture " + countClass}>
          <img src={countPic} alt="product" />
        </div>
        <b>{priceText} {count > 1 && <span> {locale.freeDelivery}</span>}</b>
        <Button productCount={count-1} className="order-button-form"/>
      </div>
    </div>
  );
};

export default ProductForm;
