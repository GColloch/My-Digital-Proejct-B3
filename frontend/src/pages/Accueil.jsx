import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import '../styles/_footer.scss'

function Home () {
  return (
    <>
      <div className='container'>
        <Presentation />
      </div>
      <Footer />
    </>
  )
}

export default Home
