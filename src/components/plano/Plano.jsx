import React from 'react'
import AryaPlano from '../../img/AryaPlano.png';
import Button from '../Botoes/Button';

import './Plano.css';


const Plano = () => {
  return (
    <section className='planoNegocio'>

        <aside className='barLeft'>
            <h2>Uma consultoria digital Criada com I.A para Alavancar o crescimento do seu negócio.</h2>
            <p>Obtenha diversos prompts e modelos prontos para aplicar a inteligência artificial nas operações diárias da sua empresa.</p>
               
                <div className='btnPlano'>
                    <Button  className={'btnConhecer'}> Conhecer Arya </Button>
                    <Button  className={'btnExperient'}> Experimente Gratuitamente </Button>
                </div>
               
        </aside>

        <aside className='barRigth'>
            <>
                <img src={AryaPlano} alt="Imagem de dinheiro e gráficos de ganho" />
            </>
        </aside>

    </section>
  )
}

export default Plano
