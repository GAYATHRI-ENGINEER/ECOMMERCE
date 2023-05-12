import React, {useState } from "react";
import "./Languages.css";
import algerie from "./algerie.png";
import france from "./france.png";
function Languages({changeLanguage,language}) {

  const [selectedLanguage, setSelectedLanguage] = useState(france);
  
  function handleClick(){
    if(selectedLanguage === france){
      setSelectedLanguage(algerie);
      changeLanguage();
    }else{
      setSelectedLanguage(france);
      changeLanguage();
    }
  }

  return (
    <div className="select-lang" onClick={handleClick}>
      <img className="select-lang-img" src={selectedLanguage} alt="language" />
      <p>{language}</p>
    </div>
  );
}
export default Languages;
