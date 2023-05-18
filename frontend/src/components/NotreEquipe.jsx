import React from 'react'
import '../styles/NotreEquipe.scss'

const NotreEquipe = () => {
  return (
    <div className='containerEquipe'>
      <img src='/assets/img/Accueil/equipe.jpg' className='imageEquipe' />
      <div className='contentEquipe'>
        <h2><span>NOTRE EQUIPE ET SES </span>VALEURS</h2>
        <p>
          Notre équipe vous accompagne dans les <br />
          démarches liées à la suite du décès d'un <br />
          proche. Nous mettons en avant :
        </p>
        <div className='additionalContent'>
          <img src='/assets/img/Accueil/valeurs.png' alt='Image supplémentaire' />
          <div className='subtitles'>
            <h3>L'HUMAIN</h3>
            <h3>LÉCOUTE</h3>
            <h3>L'AIDE</h3>
          </div>
        </div>
        <button><b>Découvrez-nous</b></button>
      </div>
    </div>
  )
}

export default NotreEquipe
