import React from "react";
import "./Header.css"
import Vk from "/vk.svg";
import Fb from "/fb.svg";
import Linkedin from "/linkedin.svg";
const Header=()=>{
    return(
      <div className="header">
      <div className="container header__container">
       <ul className="header__list">
        <li className="header__item"><p className="header__lead">LEANGROUP - тубы и этикетки</p></li>
        <li  className="header__item"><h2 className="header__title">Ламинатные тубы</h2></li>
        <li className="header__item"><p className="header__text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p></li>
        <li className="header__item"><button className="header__btn">Каталог</button></li>
       </ul>
<ul className="header__list">

  <li className="header__item"><a href="#"><img src={Vk} alt="vk link" /></a></li>
  <li className="header__item"><a href="#"><img src={Fb} alt="fb link" /></a></li>
  <li className="header__item"><a href="#"><img src={Linkedin} alt="linkedin link"/></a></li>
  
</ul>
      </div>
      </div>
    )
}
export default Header;