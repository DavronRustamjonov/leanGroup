import React from "react";
import "./Service.css";
import Button from "../Button/Button";
import NextButton from "../nextButton/nextButton";
import Service1 from '/service1.svg';
import Service2 from '/service2.svg';
import Service3 from '/service3.svg';
import Service4 from '/service4.svg';
import Service5 from '/service5.svg';

const Service = () => {
  return (
    <div className="service">
      <div className="container service__container">
        <h2 className="service__title">Наша <span className="service__span">продукция</span></h2>
        <ul className="service__list">
          <li><Button name={'Ламинатные тубы'} /></li>
          <li><Button name={'Экструзионные тубы'} /></li>
          <li><Button name={'Другая упаковка'} /></li>
        </ul>
        <ul className="service__list">
          <li className="service__item"><img className="service__pic" src={Service1} alt="service pic" /></li>
          <li className="service__item"><img className="service__pic" src={Service2} alt="service pic" /></li>
          <li className="service__item"><img className="service__pic" src={Service3} alt="service pic" /></li>
          <li className="service__item"><img className="service__pic" src={Service4} alt="service pic" /></li>
          <li className="service__item"><img className="service__pic" src={Service5} alt="service pic" /></li>
        </ul>
        <ul className="service__list">
          <li className="service__item"><NextButton name={'Перейти в каталог'} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Service;
