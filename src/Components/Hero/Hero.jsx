import React from "react";
import "./Hero.css"
import Video from "/video_pic.svg";
const Hero=()=>{
    return(
       <div className="hero">
        <div className="container hero__container">
          <h2 className="hero__title">О компании <span className="title-span">LEANGROUP</span></h2>
          <div className="hero__content">
          <ul className="hero__list">
            <img src={Video} className="hero-pic" alt="video pic" />
          </ul>
          <ul className="hero__list">
<li><p className="hero__text">Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p></li>
<li><p className="hero__frist-text">
Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
</p></li>
<li><p className="hero__next-text">С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>      </li>  
          </ul>
          </div>
        </div>
      </div>
    )
}
export default Hero;