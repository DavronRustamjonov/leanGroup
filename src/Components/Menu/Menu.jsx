import React from "react";
import "./Menu.css";
import NextButton from "../nextButton/nextButton";
import Menu1 from '/menu1.svg';
import Menu2 from '/menu2.svg';
import Menu3 from '/menu3.svg';
import Menu4 from '/menu4.svg';
import Menu5 from '/menu5.svg';

const Menu = () => {
  return (
    <div className="menu">
      <div className="container menu__container">
        <h2 className="menu__title">Наша <span className="menu__span">команда</span></h2>
       
        <ul className="menu__list">
          <li className="menu__item">
            <img className="menu__pic" src={Menu1} alt="menu pic" />
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu2} alt="menu pic" />
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu3} alt="menu pic" />
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu4} alt="menu pic" />
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu5} alt="menu pic" />
            
            </li>
        </ul>
        <ul className="menu__list">
          <li className="menu__item"><NextButton name={'Перейти в каталог'} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
