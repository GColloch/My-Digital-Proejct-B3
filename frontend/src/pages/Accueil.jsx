import Avantages from '../components/Avantages'
import Footer from '../components/Footer'
import NosProfessionnels from '../components/NosProfessionnels'
import NosServices from '../components/NosServices'
import NotreEquipe from '../components/NotreEquipe'
import Presentation from '../components/Presentation'

function Home () {
  return (
    <>
      <div className='container'>
        <Presentation />
      </div>
      <Avantages />
      <NosServices />
      <NosProfessionnels />
      <NotreEquipe />
      <Footer />
    </>
  )
}

export default Home
