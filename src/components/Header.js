import React from 'react'
import "./Header.css";
import ARYA_LOGO from '../img/ARYA_LOGO.jpg';

function handleClick(e) {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(id);
  const targetOffset = targetElement.offsetTop;

  window.scrollTo({
    top: targetOffset - 0, 
    behavior: 'smooth',
  });
}


const Header = () => {
  return (
      <header id='home' className="header">
        <img src={ARYA_LOGO} alt="Arya" className="logo"></img>
        <ul className="nav-list">
            <li><a href="#home"onClick={handleClick}>Inicio</a></li>
            <li><a href="#servicos" onClick={handleClick}>Serviços</a></li>
            <li><a href="#contato" onClick={handleClick}>Contatos</a></li>
            <li><a href="#login"><button className='btn-login' >Login</button></a></li>
        </ul>
    
    </header>
  )
}

export default Header
