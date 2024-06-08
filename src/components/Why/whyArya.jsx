import React from 'react'


import './whyArya.css';

import Button from '../Botoes/Button';

const whyArya = () => {
  return (
    <section className='reason'>
        <h2>Por que usar Arya?</h2>
            <div className='grid-motivo'>

                <div className='motivo'>
                <div className='number'>
                    <h1>1</h1>
                </div>
                        <div className='text-motivo'>
                        <h3>Economia de tempo e dinheiro</h3>
                        <p>Melhore sua eficiência economizando tempo e completando tarefas complexas 10 vezes mais rápido. Além disso, economize evitando a necessidade de contratar mais pessoal.</p>
                        </div>
                </div>

                <div className='motivo'>
                <div className='number'>
                    <h1>2</h1>
                </div>
                        <div className='text-motivo'>
                        <h3>Mais facilidade</h3>
                        <p>
                        Com a Arya, não é necessário dominar o uso de inteligência artificial; nós cuidamos do trabalho pesado para você.</p>
                        </div>
                </div>

                <div className='motivo'>
                <div className='number'>
                    <h1>3</h1>
                </div>
                        <div className='text-motivo'>
                        <h3>Customização do seu negócio</h3>

                        <p>
                        Com a nossa tecnologia e o conhecimento do seu negócio, iremos oferecer insights estratégicos para ajudar nas suas decisões.</p>
                        </div>
                </div>

                <div className='motivo'>
                <div className='number'>
                    <h1>4</h1>
                </div>
                        <div className='text-motivo'>
                        <h3>Passo a passo para o sucesso</h3>
                        
                        <p>
                        A Arya facilita a construção de uma estratégia de marketing bem elaborada, fornecendo orientações passo a passo.
                        </p>
                        </div>
                </div>
                
            </div>
                <Button className={'experimentar'}> Experimente Gratuitamente </Button>
    </section>
  )
}

export default whyArya
