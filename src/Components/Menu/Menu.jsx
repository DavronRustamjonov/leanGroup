import React from "react";
import "./Menu.css";
import NextButton from "../nextButton/nextButton";
import Menu1 from '/menu1.png';
import Menu2 from '/menu2.png';
import Menu3 from '/menu3.png';
import Menu4 from '/menu4.png';
import Menu5 from '/menu5.png';

const Menu = () => {
  return (
    <div className="menu">
      <div className="container menu__container">
        <h2 className="menu__title">Наша <span className="menu__span">команда</span></h2>
       
        <ul className="menu__list">
          <li className="menu__item">
            <img className="menu__pic" src={Menu1} alt="menu pic" />
            <p className="menu__lead">Антух Евгений</p>
            <p className="menu__text">Начальник отдела снабжения</p>
            <p className="menu-next-text">+375 (17) 270-53-77 (148)</p>
            <p className="menu-next-text"> +375 44 764-16-28</p>
            <p className="menu-next-text">j.antuh@leangroup.by</p>
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu2} alt="menu pic" />
            <p className="menu__lead">Антух Евгений</p>
            <p className="menu__text">Начальник отдела снабжения</p>
            <p className="menu-next-text">+375 (17) 270-53-77 (148)</p>
            <p className="menu-next-text"> +375 44 764-16-28</p>
            <p className="menu-next-text">j.antuh@leangroup.by</p>
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu3} alt="menu pic" />
            <p className="menu__lead">Антух Евгений</p>
            <p className="menu__text">Начальник отдела снабжения</p>
            <p className="menu-next-text">+375 (17) 270-53-77 (148)</p>
            <p className="menu-next-text"> +375 44 764-16-28</p>
            <p className="menu-next-text">j.antuh@leangroup.by</p>
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu4} alt="menu pic" />
            <p className="menu__lead">Антух Евгений</p>
            <p className="menu__text">Начальник отдела снабжения</p>
            <p className="menu-next-text">+375 (17) 270-53-77 (148)</p>
            <p className="menu-next-text"> +375 44 764-16-28</p>
            <p className="menu-next-text">j.antuh@leangroup.by</p>
            
            </li>
          <li className="menu__item">
            <img className="menu__pic" src={Menu5} alt="menu pic" />
            <p className="menu__lead">Антух Евгений</p>
            <p className="menu__text">Начальник отдела снабжения</p>
            <p className="menu-next-text">+375 (17) 270-53-77 (148)</p>
            <p className="menu-next-text"> +375 44 764-16-28</p>
            <p className="menu-next-text">j.antuh@leangroup.by</p>
            
            </li>
        </ul>
        <ul className="menu__list">
          <li className="menu__item"><NextButton name={'Наша команда'} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
