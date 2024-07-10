import React from 'react'
import "./Navbar.css"
import Logo_1 from "../../assets/nav-logo.svg"
import { Dropdown, Space } from 'antd';
const Navbar = () => {
  const items = [
    {
      key: '1',
      label: (
        <li className='navbar__item'><a className='navbar__link' href="#">I can</a></li>
      ),
    },
    {
      key: '2',
      label: (
        <li className='navbar__item'><a className='navbar__link' href="#">Isroil</a></li>
      ),
    },
    {
      key: '3',
      label: (
        <li className='navbar__item'><a className='navbar__link' href="#">Xumoyun</a></li>
      ),
    },    {
      key: '4',
      label: (
        <li className='navbar__item'><a className='navbar__link' href="#">Davron</a></li>
      ),
    },
    {
      key: '5',
      label: (
        <li className='navbar__item'><a className='navbar__link' href="#">Bektemur</a></li>
      ),
    },
  ];
  return (
    <div className='navbar'>
      <div className='container navbar__container'>
        <img className='navbar__img' src={Logo_1} alt="" />
       
        <ul className='navbar__list'>
          <li className='navbar__item'> <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <a className='navbar__link' href="#">Продукция</a>
            </Space>
          </a>
        </Dropdown></li>
          <li className='navbar__item'>
          <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <a className='navbar__link' href="#">Сертификаты</a>
            </Space>
          </a>
        </Dropdown>
            </li>
          <li className='navbar__item'>
          <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space> 
              <a className='navbar__link' href="#">Наша команда</a>
            </Space>
          </a>
        </Dropdown>

           </li>
          <li className='navbar__item'>
          <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space> 
            <a className='navbar__link' href="#">О нас</a>
            </Space>
          </a>
        </Dropdown></li>
          <li className='navbar__item'>
          <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space> 
            <a className='navbar__link' href="#">Новости </a>
            </Space>
          </a>
        </Dropdown>
            </li>
          <li className='navbar__item'>
          <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space> 
            <a className='navbar__link' href="#">Вакансии</a>
            </Space>
          </a>
        </Dropdown>
            </li>
          <li className='navbar__item'>
          <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>    
              <a className='navbar__link' href="#">Контакты</a>
            </Space>
          </a>
        </Dropdown>
            
         </li>
         <li  href="#">
         <button className='navbar__btn'>
          <span className='navbar__frist-btn' active>RU </span> |<span className='navbar__next-btn'>EN</span></button>
         </li>
        </ul>
       
      </div>
    </div>
  )
}

export default Navbar;