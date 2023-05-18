import React from 'react'
import '../styles/NosProfessionnels.scss'

const NosProfessionnels = () => {
  return (
    <>
      <div class='professionnels'>
        <h2>NOS PRO<span>FESSIONNELS</span></h2>
        <p>
          Nous sommes en partenariat avec des professionnels au plus près de chez vous, <br />
          pour vous aider lors de la pertre d'un proche. <br />
          Vous y retrouvez leurs coordonnées(téléphone, adresse mail...)
        </p>
        <button className='professionnels'>Découvrez</button>
      </div>
      <div className='containerPro'>
        <div className='left-columnPro'>
          <div className='cardPro'>Card 1</div>
          <div className='cardPro'>Card 2</div>
        </div>
        <div className='right-columnPro'>
          <div className='cardPro'>Card 3</div>
        </div>
        <div className='imagePro'>
          <img src='your-image-url' />
        </div>
      </div>

    </>
  )
}

export default NosProfessionnels
