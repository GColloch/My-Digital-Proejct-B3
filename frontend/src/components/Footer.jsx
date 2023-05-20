// Footer.js

import React from 'react'
import '../styles/_footer.scss'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'

const Footer = () => {
  return (
    <>

      <div className='containerfooter'>
        <p>RETROUVEZ TOUTES LES RÉPONSES À VOS QUESTIONS</p>
        <button>Notre FAQ</button>
      </div>
      <footer className='footer'>
        <div className='text-containerfooter'>
          <p className='centered-textfooter'>
            @ 2023 - NEFTI - Tous droits réservés - politique de confidentialité - Cookies - Mentions Légales
          </p>
        </div>
        <div className='logo-containerfooter'>
          <img className='logofooter' src='assets/img/Accueil/logofooter.png' alt='Logo' />
          <div className='picto-containerfooter'>
            <FaFacebookSquare className='pictofooter' />
            <IoLogoLinkedin className='pictofooter' />
            <AiOutlineInstagram className='pictofooter' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
