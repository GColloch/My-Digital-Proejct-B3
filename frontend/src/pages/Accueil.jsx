import Avantages from '../components/Avantages'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'

function Home () {
  return (
    <>
      <div className='container'>
        <Presentation />
      </div>
      <Avantages />
      <Footer />
    </>
  )
}

export default Home
