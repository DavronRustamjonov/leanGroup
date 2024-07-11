import React from "react";
import Logo from '/footer-logo.svg';
import Vk from '/vk.svg';
import Fb from '/fb.svg';
import Linkedin from '/linkedin.svg';
import "./Footer.css";

const Footer=()=>{
    return(
      <div className="footer">
        <div className="container footer__container ">
<ul className="footer__list">
  <li className="footer__item"><img src={Logo} alt="footer logo " /></li>
  <li className="footer__item">
  <a href="#" className="footer__link"><img src={Vk} alt="vk link" /></a>
  <a href="#" className="footer__next-link"><img src={Fb} alt="fn link" /></a>
  <a href="#" className="footer__link"><img src={Linkedin} alt="linkedin link" /></a>
     </li>

</ul>
<hr />
<ul className="footer__next-list">
  <li className="footer__item">
    <p className="footer__lead">Продукция</p><br />
    <a href="#" className="footer__link">Ламинатные тубы</a><br />
    <a href="#" className="footer__link">Экструзионные тубы</a><br />
    <a href="#" className="footer__link">Другая упаковка</a>
  </li>
  <li className="footer__item">
    <p className="footer__lead">Компания</p><br />
    <a href="#" className="footer__link">О нас</a><br />
    <a href="#" className="footer__link">Наша команда</a><br />
    <a href="#" className="footer__link">Сертификаты</a>
  </li>
  <li className="footer__item">
    <p className="footer__lead">Разделы</p><br />
    <a href="#" className="footer__link">Контакты</a><br />
    <a href="#" className="footer__link">Новости</a><br />
    <a href="#" className="footer__link">Вакансии</a>
  </li>
  <li className="footer__item">
    <p><span className="footer__span">Беларусь</span></p><br />
    <p className="footer__text">+375 (17) 270 53 77</p>
    <p className="footer__text">+375 (17) 270 53 78</p>
    
    <p><span className="footer__span">Москва</span></p><br />
    <p className="footer__text">+375 (17) 270 53 77</p>
    <p className="footer__text">+375 (17) 270 53 78</p>
    
  </li>

  <li className="footer__item">
    <p><span className="footer__span">Европа</span></p><br />
    <p className="footer__text">+48 73 1111 044</p>
    <br />
    <p><span className="footer__span">Екатеринбург</span></p><br />
    <p className="footer__text">+7 (343) 346 82 06</p>
  </li>
</ul>
<p className="footer__next-text">© 2022 Leangroup. All Rights Reserved. <br />
Разработка и продвижение сайтов SkyWeb.by</p>
        </div>
      </div>
    )
}
export default Footer;