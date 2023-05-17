import Avantages from '../components/Avantages'
import Footer from '../components/Footer'
import NosServices from '../components/NosServices'
import Presentation from '../components/Presentation'

function Home () {
  return (
    <>
      <div className='container'>
        <Presentation />
      </div>
      <Avantages />
      <NosServices />
      <Footer />
    </>
  )
}

export default Home
