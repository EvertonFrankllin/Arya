import React from 'react';
//import Footer from './components/Footer';
import "./Aside.css";
import ONDA from '../img/ONDA.svg';
import MOCAP from '../img/Mocap imagens.webp';

const Aside = () => {
  return (
    <section id='servicos' className='center'>
            <section className="center-left">
                <div className='nome-logo'>
                    <h1>Arya</h1>
                    <div className='onda'><img src={ONDA} alt='IMAGEM DE ONDA'></img></div>
                </div>

                    <div className='demonstracao'>
                        <h3>O novo jeito de cuidar do seu negócio</h3>
                        <p>A IA completa para ajudar a alavancar sua empresa.</p>
                          <button className='btn-agenda'>Agendar Demonstração</button>
                    </div>
            </section>

            <section className="center-rigth">
                <div className='mocap'><img src={MOCAP} alt='IMAGEM DE EQUIPAMENTOS ELETRONICOS'></img></div>
            </section>
            
    </section>
    
  )
  
}

export default Aside