import { NavLink } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa'

import '../styles/Navbar.scss'

function Navbar () {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle(
      'responsive_nav'
    )
  }
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  return (
    <>
      <header>
        <img className='logo' src='/assets/img/logo.png' />

        <div
          className={`mon-espace ${isScrolled ? 'scrolled' : ''}`}
        >
          <NavLink
            to='/profil'
            style={{ color: isScrolled ? 'black' : 'white' }}
          ><FaUserAlt className='icon' size={30} color={isScrolled ? 'black' : 'white'} />

            mon espace
          </NavLink>
        </div>

        <nav ref={navRef}>
          <NavLink to='/' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Accueil
            </li>
          </NavLink>

          <NavLink to='/volontées-funéraires' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Volontées Funéraires
            </li>
          </NavLink>
          <NavLink to='/nos-services' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Nos Services
            </li>
          </NavLink>
          <NavLink to='/professionnels' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Professionnels
            </li>
          </NavLink>
          <NavLink to='/notre-equipe' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Notre Équipe
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
