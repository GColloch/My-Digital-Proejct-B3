// Footer.js

import React from 'react'
import '../styles/_footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='logo-containerfooter'>
        <img className='logofooter' src='path/to/logo.png' alt='Logo' />
      </div>
      <div className='text-containerfooter'>
        <p className='centered-textfooter'>@ 2023 - NEFTI - Tous droits réservés - politique de confidentialité - Cookies - Mentions Légales</p>
      </div>
      <div className='picto-containerfooter'>
        <img className='picto' src='path/to/picto1.png' alt='Pictogramme 1' />
        <img className='picto' src='path/to/picto2.png' alt='Pictogramme 2' />
        <img className='picto' src='path/to/picto3.png' alt='Pictogramme 3' />
      </div>
    </footer>
  )
}

export default Footer
