import React, { useContext, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.css";
import { LocaleContext } from "../../LocaleContext";
import { Events, scroller } from "react-scroll";

function Header(props) {
  
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [locale] = useContext(LocaleContext);
  
  useEffect(()=>{
    Events.scrollEvent.register("begin");

    Events.scrollEvent.register("end");

    window.addEventListener("resize", resize);
    resize();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("resize", resize);
    };
  });

  function resize() {
    let innerWidth = window.innerWidth <= 1080;
    if (innerWidth !== isMobileSize) {
      setIsMobileSize(innerWidth);
      setShowMenu(!innerWidth);
    }
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function scrollTo(name){
    scroller.scrollTo(name, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  } 

  function MenuItems() {
    return (
      <ul className={"menu-container"}>
        <li
          className="menu-item logo-box"
          onClick={()=>scrollTo("principal_page")}
        >
          <b> Café </b> Vert
        </li>
        
        <li
          className="menu-item"
          onClick={()=>scrollTo("diet")}
        >
          {locale.title}
          <b> {locale.menuItem1} </b>
        </li>
        
        <li
          className="menu-item"
          onClick={()=>scrollTo("comments")}
        >
          Café Vert
          <b> {locale.menuItem2} </b>
        </li>

        <li
          className="menu-item"
          onClick={()=>scrollTo("instructions")}
        >
          Café Vert
          <b> {locale.menuItem3} </b>
        </li>
        <li
          className="menu-item"
          onClick={()=>scrollTo("ingredients")}
        >
          Café Vert
          <b> {locale.menuItem4} </b>
        </li>
        <li
          className="menu-item"
          onClick={()=>scrollTo("principal_page")}
        >
          Café Vert
          <b> {locale.menuItem5} </b>
        </li>

        <li
          className="menu-item menu-order-btn"
          onClick={()=>scrollTo("orderx")}
        >
          {locale.menuItem6}
        </li>
      </ul>
    );
  }

  return (
    <header className="menu">
      {isMobileSize && (
        <div className={"nav-toggle"+ (showMenu?" brown-bg":"")} onClick={handleShowMenu}>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      <CSSTransition
        key={1}
        in={showMenu}
        classNames="menu-animation"
        timeout={200}
        unmountOnExit
      >
        <MenuItems />
      </CSSTransition>
    </header>
  );
}
export default Header;
