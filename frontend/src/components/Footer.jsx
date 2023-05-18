// Footer.js

import React from 'react'
import '../styles/_footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__left'>
        <img className='logofooter' src='/assets/img/logo.png' />
      </div>
      <div className='footer__social'>
        <img src='facebook.png' alt='Facebook' className='footer__social-icon' />
        <img src='linkedin.png' alt='LinkedIn' className='footer__social-icon' />
        <img src='instagram.png' alt='Instagram' className='footer__social-icon' />
      </div>
      <div className='footer__text'>
        <p>
          @ 2023 - NEFTI - Tous droits réservés - Politique de confidentialité - Cookies - Mentions Légales
        </p>
      </div>
      <div className='footer__overlay'>
        <div className='footer__overlay-content'>
          <p>RETROUVEZ TOUTES LES RÉPONSES À VOS QUESTIONS</p>
          <button className='footer__overlay-button'>Notre FAQ</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
