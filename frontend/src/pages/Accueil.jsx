import React from 'react'
import Avantages from '../components/Avantages'
import Footer from '../components/Footer'
import NosArticles from '../components/NosArticles'
import NosProfessionnels from '../components/NosProfessionnels'
import NosServices from '../components/NosServices'
import NotreEquipe from '../components/NotreEquipe'
import Presentation from '../components/Presentation'

const Home = () => {
  return (
    <>
      <div className='container'>
        <Presentation />
      </div>
      <Avantages />
      <NosServices />
      <NosProfessionnels />
      <NosArticles />
      <NotreEquipe />
      <Footer />
    </>
  )
}

export default Home
