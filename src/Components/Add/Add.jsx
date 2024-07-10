import React from "react";
import "./Add.css";
import Add_num from '/add-name.svg';
import Add_tel from '/add-icon.svg';


import NextButton from "../nextButton/nextButton";
const Add=()=>{
    return(
      <div className="add">
       <div className="container add__container">
        <ul className="add__list">
        <h2 className="add__title">Получить подробную <span className="add__span">информацию</span></h2>
        <p className="add__text">Просто заполните форму, наш менеджер свяжется  с вами в ближайшее время</p>
    <form action="#" >
        <div className="wrapper">
<li className="add__item"><img className="add-pic" src={Add_num} alt="human icon pic " /><input className="add__input" type="text" placeholder=" Ваше имя" /></li>
<li className="add__item"><img className="add-pic" src={Add_tel} alt="tel icon  pic " /><input className="add__input" type="tel" placeholder=" +375 (29) 0000000" /></li>
</div> 
<br />

<li className="add__item"><textarea className="text__area" rows="6" cols="76"> Комментарий </textarea></li>

<li className="add__item"><NextButton className="add__btn" name={'Получить информацию'} /></li>
    </form>
    </ul>
    <ul className="add__next-list"></ul>
       </div>
      </div>
    )
}
export default Add;