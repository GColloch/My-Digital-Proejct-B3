import React from 'react'
import '../styles/NosServices.scss'

const NosServices = () => {
  return (
    <div id='bloc'>
      <div className='title'>
        <h1>
          <span>NOS SERV</span>ICES
        </h1>
      </div>
      <div className='card-container'>
        <div className='services'>
          <img className='démarches' src='/assets/img/Accueil/démarches.png' alt='Logo 1' />
          <h2>LES DÉMARCHES</h2>
          <p>
            Immobilières, successions, <br />
            pré-obsèques, obsèques ou <br />
            post-obsèques, visionnez les démarches <br />
            primordiales qui doivent être effectuées <br />
            à la suite du décès d'un proche.
          </p>
          <button>Découvrez</button>
        </div>
        <div className='services'>
          <img className='cérémonies' src='/assets/img/Accueil/cérémonies.png' alt='Logo 2' />
          <h2>LES CÉRÉMONIES</h2>
          <p>
            En fonction de votre religion (athée, <br />
            catholique, musulman...), visualisez le <br />
            déroulement des cérémonies.
          </p>
          <button>Découvrez</button>
        </div>
        <div className='services'>
          <img className='tarificateur' src='/assets/img/Accueil/tarificateur.png' alt='Logo 3' />
          <h2>LE TARIFICATEUR</h2>
          <p>
            Choisissez à ce que vous souhaitez pour <br />
            la cérémonie d'un proche, ou pour votre <br />
            propre cérémonie et découvrez le <br />
            montant total moyen en fonction de vos <br />
            choix (cercueil, tombeau...)
          </p>
          <button>Découvrez</button>
        </div>
      </div>
    </div>
  )
}

export default NosServices
