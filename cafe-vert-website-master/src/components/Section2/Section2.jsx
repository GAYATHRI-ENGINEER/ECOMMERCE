import React,{useContext} from "react";
import { LocaleContext } from "../../LocaleContext";
import "./Section2.css";

const Section2 = () => {
  
  const [locale] = useContext(LocaleContext);
  
  return (
    <section className="section2">
      <div>
        <h3>{locale.s2List1}</h3>
        <p>{locale.s2List1d}</p>
      </div>
      <div>
        <h3>{locale.s2List2}</h3>
        <p>{locale.s2List2d}</p>
      </div>
      <div>
        <h3>{locale.s2List4}</h3>
        <p>{locale.s2List4d}</p>
      </div>
    </section>
  );
};

export default Section2;
