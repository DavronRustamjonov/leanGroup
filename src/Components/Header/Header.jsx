import React from "react";
import "./Header.css"
import Vk from "/vk.svg";
import Fb from "/fb.svg";
import Linkedin from "/linkedin.svg";

import NextButton from "../nextButton/nextButton";
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Header = () => {
  return (


    <div className="header">
      <Carousel autoplay dots={false} draggable={true} autoplaySpeed={2000} arrows>
        <div>
          <div className="container header__container">
            <ul className="header__list">
              <li className="header__item"><p className="header__lead">LEANGROUP - тубы и этикетки</p></li>
              <li className="header__item"><h2 className="header__title">Ламинатные тубы</h2></li>
              <li className="header__item"><p className="header__text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p></li>
              <li className="header__item">
                <NextButton name={'Каталог'} /></li>
            </ul>
            <ul className="header__next-list">

              <li className="header__item"><a href="#"><img src={Vk} alt="vk link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Fb} alt="fb link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Linkedin} alt="linkedin link" /></a></li>

            </ul>
          </div>


        </div>
        <div>
          <div className="container header__container">
            <ul className="header__list">
              <li className="header__item"><p className="header__lead">LEANGROUP - тубы и этикетки</p></li>
              <li className="header__item"><h2 className="header__title">Ламинатные тубы</h2></li>
              <li className="header__item"><p className="header__text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p></li>
              <li className="header__item">
                <NextButton name={'Каталог'} /></li>
            </ul>
            <ul className="header__next-list">

              <li className="header__item"><a href="#"><img src={Vk} alt="vk link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Fb} alt="fb link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Linkedin} alt="linkedin link" /></a></li>

            </ul>
          </div>

        </div>
        <div>
          <div className="container header__container">
            <ul className="header__list">
              <li className="header__item"><p className="header__lead">LEANGROUP - тубы и этикетки</p></li>
              <li className="header__item"><h2 className="header__title">Ламинатные тубы</h2></li>
              <li className="header__item"><p className="header__text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p></li>
              <li className="header__item">
                <NextButton name={'Каталог'} /></li>
            </ul>
            <ul className="header__next-list">

              <li className="header__item"><a href="#"><img src={Vk} alt="vk link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Fb} alt="fb link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Linkedin} alt="linkedin link" /></a></li>

            </ul>
          </div>

        </div>
        <div>
          <div className="container header__container">
            <ul className="header__list">
              <li className="header__item"><p className="header__lead">LEANGROUP - тубы и этикетки</p></li>
              <li className="header__item"><h2 className="header__title">Ламинатные тубы</h2></li>
              <li className="header__item"><p className="header__text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p></li>
              <li className="header__item">
                <NextButton name={'Каталог'} /></li>
            </ul>
            <ul className="header__next-list">

              <li className="header__item"><a href="#"><img src={Vk} alt="vk link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Fb} alt="fb link" /></a></li><br />
              <li className="header__item"><a href="#"><img src={Linkedin} alt="linkedin link" /></a></li>

            </ul>
          </div>

        </div>
      </Carousel>
    </div>
  )
}
export default Header;