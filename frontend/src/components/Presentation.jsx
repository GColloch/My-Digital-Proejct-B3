import React from 'react'
import '../styles/Presentation.scss'

const Presentation = () => {
  return (
    <div className='presentation-container'>
      <div className='image-container'>
        <img src='/assets/img/Accueil/banniere_Souriante.png' />
        <div className='text-container-volontés'>
          <h2>
            <span>VOLONTÉS FU</span>NÉRAIRES
          </h2>
          <p>Un formulaire simple vous permettant de sauvegarder vos <br />
            volontés funéraires et de les partager avec les personnes de votre choix
          </p>
          <button><b>Inscrivez vos volontés funéraires </b></button>
        </div>
      </div>
    </div>
  )
}

export default Presentation
