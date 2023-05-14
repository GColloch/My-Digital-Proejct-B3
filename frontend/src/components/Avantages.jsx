import React from 'react'
import '../styles/Avantages.scss'

const Avantages = () => {
  return (
    <>
      <div className='container'>
        <div className='image-container-avantages'>
          <div className='image-circle' />
          <img src='/assets/img/Accueil/pexels-radu-florin-2536579.jpg' className='rounded-image' />
        </div>
        <div className='text-container-avantages'>
          <h2><span>LES AVANTAG</span>ES À 19,99€</h2>
          <p><span className='txt'>Besoin d'aide pour vos démarches ?</span> <br />
            Accéder à une multitude d'avantages <br />
            <span className='txt2'>et d'outils pour 19,99€ seulement.</span>
          </p>
          <div className='card-container'>
            <div className='card'>
              <div className='card-header'>
                <h3>LA CHECK-LIST</h3>
                <img className='iconee' src='/assets/img/Accueil/check.png' />
              </div>
              <p>Elle vous permet de <br />
                suivre pas à pas <br />
                l'avancer de vos <br />
                démarches en cochant <br />
                quand les tâches sont <br />
                effectuées.
              </p>
            </div>
            <div class='card'>
              <div className='card-header'>
                <h3>GUIDE</h3>
                <img className='iconee' src='card-logo-url' alt='card-logo-description' />
              </div>
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
