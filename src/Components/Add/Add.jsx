import React from "react";
import "./Add.css";

import NextButton from "../nextButton/nextButton";
const Add=()=>{
    return(
      <div className="add">
       <div className="container add__container">
        <ul>
        <h2 className="add__title">Получить подробную <span className="add__span">информацию</span></h2>
        <p className="add__text">Просто заполните форму, наш менеджер свяжется  с вами в ближайшее время</p>
    <form action="#">
        <ul className="add__list">
            <li>
<input type="text" placeholder=" Ваше имя" /></li>
<li><input type="tel" placeholder=" +375 (29) 0000000" /></li></ul>
<ul className="add__list"><br />
<textarea className="text__area" rows="4" cols="50"> Комментарий </textarea></ul>
<li className="add__item">
<NextButton name={'Получить информацию'} /></li>
    </form>
    </ul>
    <ul className="add__next-list"></ul>
       </div>
      </div>
    )
}
export default Add;