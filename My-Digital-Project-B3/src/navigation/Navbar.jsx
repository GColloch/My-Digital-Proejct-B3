import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.scss'

function Navbar () {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle(
      'responsive_nav'
    )
  }

  return (
    <>
      <header>

        <img src='/assets/img/logo.png' />
        <nav ref={navRef}>
          <NavLink to='/' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Accueil
            </li>
          </NavLink>
          <NavLink to='/equipe' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Notre Équipe
            </li>
          </NavLink>
          <NavLink to='/services' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Nos Services
            </li>
          </NavLink>
         
                <NavLink to='/dernieres-volontées' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                  <li>
                    Dernières Volontées
                  </li>
                </NavLink>
                
                <NavLink to='/professionnels' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                  <li>
                    Professionnels
                  </li>
                </NavLink>
                <NavLink to='/faq' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                  <li>
                    FAQ
                  </li>
                </NavLink>
          <button
            className='nav-btn nav-close-btn'
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          className='nav-btn'
          onClick={showNavbar}
        >
          <FaBars />
        </button>
      </header>
    </>
  )
}

export default Navbar
