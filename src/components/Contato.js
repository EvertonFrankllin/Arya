import React from 'react'
import './Contato.css';

const Contato = () => {
  return (
    <section id='contato' className='contato'>

        <div className='talk-me'>
            <h3>Vamos conversar?
                Me conte sobre o seu negócio.</h3>
        </div>

        <div className='form'>
            <form className='formulario'>
                <input type='text' placeholder='Seu nome...'></input>
                <input type='email' placeholder='Seu Email...' required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"></input>
                <textarea  placeholder='Digite sua Menságem'></textarea>
                <button className='btn-send'>Enviar</button>
            </form>
            
        </div>

    </section>
  )
}

export default Contato
