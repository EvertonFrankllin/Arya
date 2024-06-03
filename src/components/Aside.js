import React from 'react';
//import Footer from './components/Footer';
import "./Aside.css";
import ARYA from '../img/ARYA_LOGO.png';
import MOCAP from '../img/mocap-oficial.jpg';
import Button from './Button';


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
                        <p>A IA completa para ajudar a alavancar sua empresa.</p>
                          <Button className={'btn-agenda'}>Agendar Demonstração</Button>
                    </div>
            </section>

            <section className="center-rigth">
                <div className='mocap'><img src={MOCAP} alt='IMAGEM DE EQUIPAMENTOS ELETRONICOS'></img></div>
            </section>
            
    </section>
    
  )
  
}

export default Aside
