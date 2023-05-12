import React from 'react'
import '../styles/Avantages.scss'
const Avantages = () => {
  return (
    <>
      <div className='container'>
        <div className='image-container-avantages'>
          <div className='image-circle' />
          <img src='/assets/img/pexels-radu-florin-2536579.jpg' className='rounded-image' />
        </div>
        <div className='text-container-avantages'>
          <h2>Les avantages à 19,99€</h2>
          <p>Un paragraphe expliquant les avantages de votre offre.</p>
          <div className='card-container'>
            <div className='card'>
              <img src='card-logo-url' />
              <h3>Card title</h3>
              <p>Card description</p>
            </div>
            <div class='card'>
              <img src='card-logo-url' alt='card-logo-description' />
              <h3>Card title</h3>
              <p>Card description</p>
            </div>
          </div>
          <button>Call to action</button>
        </div>
      </div>

    </>
  )
}

export default Avantages
