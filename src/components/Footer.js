import React from 'react'

import './Footer.css';
const Footer = () => {
  return (
    <section className='direitos-autorais'>
            <div className='politicas'>

                <a href='#Politicas'><p>Política de Cookies</p></a>
                <a href='#Avisos'><p>Aviso de Privacidade </p></a>

            </div>
        <div className='copy'><p>© Arya 2024. Todos os direitos reservados.</p></div>
    </section>
  )
}

export default Footer
