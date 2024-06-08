import React from 'react'
import { useState } from 'react';


import './Contact.css';
import Button from '../Botoes/Button';







const Contato = () => {


  //Função de Formulário
  function cadastrarNovouser(e) {
    e.preventDefault();
    console.log(name, email, mensagem);
    //console.log('Cadastrou Usuário');
  }

  //Usando Hook de state "useState"
  const [name, setName] = useState('Ex.: Everton Frankllin'); //Caso eu queira eu consigo colocar o valor que inicia o meu state
  const [email,setEmail] = useState('Ex.: email@mail.com'); //Caso eu queira eu consigo colocar um email padrão
  const [mensagem, setMensagem] = useState('Sua Mensagem');

  return (
    <section id='contato' className='contato'>

      <div className='talk-me'>
        <h3>Vamos conversar?
          Me conte sobre o seu negócio.</h3>
      </div>

      <div className='form'>
        <form onSubmit={cadastrarNovouser} className='formulario' method="POST" action="/submit-form">

          <>
            <label htmlFor='name'></label>
            <input
              type='text' 
              id='name' 
              name="name" 
              placeholder='Seu nome...' 
              onChange={(e) =>setName(e.target.value)}>
              </input>  {/* Nesse caso eu envio cada letra digitada para o meu state */}
            </>

          <>
            <label htmlFor='email'></label>
            <input 
            type='email' 
            id='email' 
            name="email" 
            placeholder='Seu Email...' 
            required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
            onChange={(e) =>setEmail(e.target.value)}>
            </input>
          </>

          <>
            <label htmlFor='message'></label>
            <textarea 
            name="message" 
            placeholder='Digite sua Menságem'
            onChange={(e) =>setMensagem(e.target.value)}>
            </textarea>
          </>

          <Button type="submit" className={'btn-send'}>Enviar</Button>
        </form>
      </div>

    </section>
  )
}

export default Contato
