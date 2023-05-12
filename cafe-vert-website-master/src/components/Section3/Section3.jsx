import React from "react";
import "./Section3.css";
import './ProductForm'
import ProductForm from "./ProductForm";

const Section3 = () => {
  
  return (
    <section className="section3">
      <ProductForm count={1}/>
      <ProductForm count={2}/>
      <ProductForm count={3}/>
    </section>
  );
};

export default Section3;
