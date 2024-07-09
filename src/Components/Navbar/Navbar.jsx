import React, { useState } from 'react';
import "./Navbar.css";
import Logo_1 from "../../assets/nav-logo.svg";
import { Dropdown, Space } from 'antd';

const Navbar = () => {
  const [language, setLanguage] = useState('ru'); 
  const items = [
    { key: '1', label_ru: 'Продукция', label_en: 'Products' },
    { key: '2', label_ru: 'Сертификаты', label_en: 'Certificates' },
    { key: '3', label_ru: 'Наша команда', label_en: 'Our Team' },
    { key: '4', label_ru: 'О нас', label_en: 'About Us' },
    { key: '5', label_ru: 'Новости', label_en: 'News' },
    { key: '6', label_ru: 'Вакансии', label_en: 'Careers' },
    { key: '7', label_ru: 'Контакты', label_en: 'Contact Us' },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className='navbar'>
      <div className='container navbar__container'>
        <img className='navbar__img' src={Logo_1} alt="Logo" />

        <ul className='navbar__list'>
          {items.map(item => (
            <li key={item.key} className='navbar__item'>
              <Dropdown
                overlay={
                  <ul className="dropdown-menu">
                    <li>
                      <a className='navbar__link' href="#">
                        {language === 'ru' ? item.label_ru : item.label_en}
                      </a>
                    </li>



                  </ul>
                }
              >
                <a className='navbar__link' onClick={(e) => e.preventDefault()}>
                  {language === 'ru' ? item.label_ru : item.label_en}
                </a>
              </Dropdown>
            </li>
          ))}
        </ul>

        <div>
          <button
            className={`navbar__btn ${language === 'ru' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('ru')}
          >
            RU
          </button>
          <button
            className={`navbar__next-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
