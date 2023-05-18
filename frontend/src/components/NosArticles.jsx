import React from 'react'
import '../styles/NosArticles.scss'
const NosArticles = () => {
  return (
    <div id='blocarticles'>
      <div className='titlearticles'>
        <h1>
          <span>NOS ARTICLES LES PL</span>US UTILES
        </h1>
      </div>
      <div className='card-containerarticles'>
        <div className='articles'>
          <h2>COMMENT OBTENIR UN <br />
            CERTIFICAT DE DÉCÈS ?
          </h2>
          <p>
            Vous pouvez faire votre demande<br />
            directement en ligne.<br />
            La demande est gratuite.<br />
            Vous recevrez le document, chez vous,<br />
            par courrier en quelques jours.
          </p>
          <button>Visionnez l'article</button>
        </div>
        <div className='articles'>
          <h2>COMBIEN DE TEMPS DURE <br />
            UNE CONCESSION ?
          </h2>
          <p>
            La durée d'un acte de concession <br />
            funéraire dépend du cimetière choisi pour <br />
            les obsèques. En effet, les municipalités<br />
            ne sont pas tenues de proposer tous les <br />
            choix possibles.
          </p>
          <button>Visionnez l'article</button>
        </div>
        <div className='articles'>
          <h2>À QUOI SERT UN TESTAMENT ?</h2>
          <p className='testament'>
            Un testament est un document écrit dans<br />
            lequel une personne exprime ses<br />
            dernières volontés, c'est-à-dire les choix <br />
            qu'elle souhaite voir respectés après <br />
            son décès.
          </p>
          <button>Visionnez l'article</button>
        </div>
      </div>
    </div>
  )
}

export default NosArticles
