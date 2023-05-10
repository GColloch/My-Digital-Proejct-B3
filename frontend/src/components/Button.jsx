import React from 'react'
import '../styles/Presentation.scss'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Button = () => {
  return (
    <>
      <h2 className='text'>texte</h2>
      <a href='/tarificateur'>
        <button className='button'>
          Découvrez notre tarificateur
          <BsFillArrowRightCircleFill size={28} className='arrow-icon' />
        </button>
      </a>

      <h2 className='text'>texte</h2>
      <a href='/tarificateur'>
        <button className='button'>
          Découvrez notre équipe
          <BsFillArrowRightCircleFill size={28} className='arrow-icon' />
        </button>
      </a>

      <h3 className='text'>texte</h3>
      <a href='/tarificateur'>
        <button className='button'>
          Inscrires ses dernières volontées
          <BsFillArrowRightCircleFill size={28} className='arrow-icon' />
        </button>
      </a>

      <h4 className='text'>texte</h4>
      <a href='/tarificateur'>
        <button className='button'>
          Découvrez toutes les démarches
          <BsFillArrowRightCircleFill size={28} className='arrow-icon' />
        </button>
      </a>
    </>
  )
}

export default Button
