import React from 'react'
import '../styles/Presentation.scss'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Presentation = () => {
  return (
    <>
      <h2 className='text'>texte</h2>
      <a href='/tarificateur'>
        <button className='button'>
          Découvrez notre tarificateur
          <BsFillArrowRightCircleFill size={20} className='arrow-icon' />
        </button>
      </a>
    </>
  )
}

export default Presentation
