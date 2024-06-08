import React from 'react';
//import Footer from './components/Footer';
import "./Home.css";
import ARYA from '../../img/ARYA_LOGO.svg';
import MOCAP from '../../img/mocap-oficial.jpg';
import Button from '../Botoes/Button';


const Aside = () => {
  return (
    <section  className='center'>
            <section className="center-left">
                <div className='nome-logo'>
                    <h1>Arya</h1>
                    <div className='arya'><img src={ARYA} alt='IMAGEM DE ONDA'></img></div>
                </div>

                    <div className='demonstracao'>
                        <h3>O novo jeito de cuidar do seu negócio</h3>
                        <p> <code>A IA completa para ajudar a alavancar sua empresa.</code> </p>
                    </div>

                      <div className='botoes'>
                        <Button id='demo' className={'btn-agenda'}><code>Conheça a Arya</code></Button>
                        <Button id='experimente' className={'btn-agenda'}>Experimente Gratuitamente</Button>
                      </div>
            </section>

            <section className="center-rigth">
                <div className='mocap'><img src={MOCAP} alt='IMAGEM DE EQUIPAMENTOS ELETRONICOS'></img></div>
            </section>
            
    </section>
    
  )
  
}

export default Aside
