import React from 'react'
import '../styles/NosProfessionnels.scss'

const NosProfessionnels = () => {
  return (
    <>
      <div className='professionnels'>
        <h2>NOS PRO<span>FESSIONNELS</span></h2>
        <p>
          Nous sommes en partenariat avec des professionnels au plus près de chez vous, <br />
          pour vous aider lors de la perte d'un proche. <br />
          Vous y retrouvez leurs coordonnées (téléphone, adresse mail...)
        </p>
        <button className='professionnels'>Découvrez</button>
      </div>
      <div className='container'>
        <div className='left-cards'>
          <div className='card'>
            <img src='/assets/img/Accueil/pexels-alex-green-5699466.jpg' alt='Card 1' />
            <div className='card-content'>
              <p>1</p>
              <h3>LES PSYCHOLOGUES</h3>
            </div>
          </div>
          <div className='card'>
            <img src='/assets/img/Accueil/pexels-cottonbro-studio-4499864.jpg' alt='Card 2' />
            <div className='card-content'>
              <p>2</p>
              <h3>LES FLEURISTES</h3>
            </div>
          </div>
        </div>
        <div className='center-image'>
          <img src='/assets/img/Accueil/france.png' alt='Image centrale' />
        </div>
        <div className='card'>
          <img src='/assets/img/Accueil/pexels-brett-sayles-3653998.jpg' alt='Card 3' />
          <div className='card-content'>
            <p>3</p>
            <h3>LES POMPES FUNEBRES</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default NosProfessionnels
