import React, { useState, useContext } from "react";
import "./Order.css";
import CountDown from "../CountDown/CountDown";

import threeProdPic from "../Section1/images/prod_three.png";
import oneProdPic from "../Section3/images/prod.png";

import Select from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import Swal from "sweetalert2";
import { LocaleContext } from "../../LocaleContext";
import { ProductContext } from "../../App";
import wilayaOptions from "./options";

const Order = () => {
  let [fields, setFields] = useState({
    costumerName: "",
    costumerPhone: "",
    quantity: 1,
    CostumerWilaya: 1,
  });
  let [errors, setErrors] = useState({
    costumerName: "",
    costumerPhone: "",
  });
  let [selectedWilaya, setSelectedWilaya] = useState(wilayaOptions[0]);

  const [locale] = useContext(LocaleContext);
  let [selectedProduct, changeSelectedProduct] = useContext(ProductContext);

  function validateForms(e) {
    e.preventDefault();

    let valide = true;
    let new_errors = { ...errors };

    if (!fields.costumerName) {
      valide = false;
      new_errors.costumerName = locale.error_consumer_name_empty;
    }
    if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/.test(fields.costumerPhone)) {
      valide = false;
      new_errors.costumerPhone = locale.error_consumer_phone_invalide;
    }
    if (!fields.costumerPhone) {
      valide = false;
      new_errors.costumerPhone = locale.error_consumer_phone_empty;
    }

    if (valide) submit();
    else setErrors(new_errors);
  }

  function submit() {
    var formData = new FormData();
    Object.keys(fields).forEach((fieldName) => {
      formData.append(fieldName, fields[fieldName]);
    });
    formData.append("quantity", selectedProduct.value);
    let date = newDateTime(new Date());
    formData.append("orderDate", date);
    formData.append("CostumerWilaya", selectedWilaya.value);
    Swal.fire({
      confirmButtonColor: "#89b92f",
      onOpen: () => {
        Swal.showLoading();

        return fetch(`https://dzcafevert-back.herokuapp.com/routes/php/sendOrders.php`, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }

            Swal.hideLoading();
            Swal.update({
              type: "success",
              text: locale.success_order_message,
            });

            return response.json();
          })
          .catch((error) => {
            Swal.update({ type: "error", confirmButtonColor: "#f27474" });
            Swal.hideLoading();
            Swal.showValidationMessage(`${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }

  function handleChange(event) {
    let new_fields = { ...fields },
      save_errors = { ...errors },
      fieldName = event.target.name,
      fieldValue = event.target.value;

    new_fields[fieldName] = fieldValue;

    if (save_errors[fieldName]) {
      delete save_errors[fieldName];
    }
    // switch (fieldName){
    //     case "costumerPhone":
    //         if(  ) {
    //           console.log("not a number !");
    //           return;
    //         }
    //     break;
    //     default:
    //     break;
    // }
    setErrors(save_errors);
    setFields(new_fields);
  }

  function handleWilaya(value) {
    setSelectedWilaya(value);
  }

  const productOptions = [
    { label: locale.oneProd, value: 1 },
    { label: locale.twoProd, value: 2 },
    { label: locale.threeProd, value: 3 },
    { label: locale.fourProd, value: 4 },
  ];

  let price;
  let shownPic;
  let productsClass;
  if (!selectedProduct) selectedProduct = productOptions[0];

  switch (selectedProduct.value) {
    case 1:
      price = 3990;
      shownPic = oneProdPic;
      productsClass = "order-left-image one-selected";
      break;
    case 2:
      price = 9000;
      shownPic = oneProdPic;
      productsClass = "order-left-image two-selected";
      break;
    case 3:
      price = 12000;
      shownPic = threeProdPic;
      productsClass = "order-left-image three-selected";
      break;
    case 4:
      price = 15000;
      shownPic = threeProdPic;
      productsClass = "order-left-image four-selected";
      break;
    default:
  }

  return (
    <form id="order" className="order" onSubmit={validateForms} name="orderx">
      <div className="order-left">
        <div className={productsClass}>
          <img src={shownPic} alt="" />
        </div>
        <div className="order-left-price neucha">
          <h4> {`DZD ${price} ` + locale.freeDelivery} </h4>
        </div>
      </div>
      <div className="order-right">
        <div className="order-select-container">
          <Select
            onChange={changeSelectedProduct}
            value={selectedProduct}
            placeholder={selectedProduct.label}
            options={productOptions}
          />
        </div>
        <Input handlechange={handleChange} disabled={true} placeholder={locale.algeria} type="text" />
        <div className="order-select-container">
          <Select
            onChange={handleWilaya}
            value={selectedWilaya}
            placeholder={selectedWilaya.label}
            options={wilayaOptions}
          />
        </div>
        <Input
          name="costumerName"
          handlechange={handleChange}
          placeholder={locale.name}
          error={errors.costumerName}
          type="text"
        />
        <Input
          name="costumerPhone"
          handlechange={handleChange}
          value={fields.costumerPhone}
          placeholder={locale.phoneNumber}
          error={errors.costumerPhone}
          type="text"
        />
        <button className="order-button-form"> {locale.orderNow} </button>
      </div>
      <CountDown title={locale.countdown_title} />
    </form>
  );
};

export default Order;

function newDateTime(d) {
  var DTformat = newDate(d) + " " + newTime(d);
  return DTformat;
}

function newTime(d) {
  var H = d.getHours(),
    M = d.getMinutes();
  if (H < 10) H = "0" + H;
  if (M < 10) M = "0" + M;
  var time = [H, M].join(":");
  return time;
}

function newDate(today) {
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}
