import React from 'react'

//Importando componentes
import Button from './Botoes/Button';


//Impotando estilos
import './Section.css';


const Section = () => {
  return (
    <section id='servicos' className='sobre-arya'>

        <div className='titulo-h3'>
            <h3>O Arya é uma ferramenta que busca mudar a maneira de ver seu negócio.</h3>
        </div>

        <div className='paragrafo'>
        <p>
            Nossa ferramenta foca na análise do seu modelo de negócios, baseando se em 
            dados existentes da empresa, fornecer uma tomada de decisões otimizadas.
            <br/><br/>
            Essas decisões levam em conta o crescimento e escalabilidade do negócio, 
            visando economia, sustentabilidade e lucro como principais características.
            <br/><br/>
            Deixe as tarefas repetitivas por conta da Arya e concentre-se no que realmente importa, o seu negócio.
        </p>
          
        </div>
        <Button className={'btn-button'}> Começar agora </Button>
          
      
    </section>
  )
}

export default Section
