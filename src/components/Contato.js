import React from 'react'
import './Contato.css';
import Button from './Button';

const Contato = () => {
  return (
    <section id='contato' className='contato'>

        <div className='talk-me'>
            <h3>Vamos conversar?
                Me conte sobre o seu negócio.</h3>
        </div>

        <div className='form'>
          <form className='formulario' method="POST" action="/submit-form">
              <input type='text' name="name" placeholder='Seu nome...'></input>
              <input type='email' name="email" placeholder='Seu Email...' required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"></input>
              <textarea name="message" placeholder='Digite sua Menságem'></textarea>
              <Button type="submit" className={'btn-send'}>Enviar</Button>
          </form>
        </div>

    </section>
  )
}

export default Contato
