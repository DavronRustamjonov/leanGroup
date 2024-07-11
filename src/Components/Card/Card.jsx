import React from "react";
import "./Card.css";
import NextButton from "../nextButton/nextButton";
import Card1 from '/card1.png';
import Card2 from '/card2.png';
import Card3 from '/card3.png';
const Card = () => {
  return (
    <div className="card">
      <div className="container card__container">
        <h2 className="card__title">Наша <span className="card__span">команда</span></h2>
       
        <ul className="card__list">
          <li className="card__item">
            <img className="card__pic" src={Card1} alt="card pic" />
            <p className="card__text">28.01.2022</p>
            <p className="card__lead">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            
            </li>
          <li className="card__item">
            <img className="card__pic" src={Card2} alt="card pic" />
            <p className="card__text">21.01.2022</p>
            <p className="card__lead">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            
            </li>
          <li className="card__item">
            <img className="card__pic" src={Card3} alt="card pic" />
            <p className="card__text">16.12.2021</p>
            <p className="card__lead">Туба, как вид упаковки</p>
            
            </li>
        </ul>
        <ul className="card__list">
          <li className="card__item"><NextButton name={'Все новости'} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
