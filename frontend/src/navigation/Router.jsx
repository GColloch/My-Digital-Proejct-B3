import { Route, Routes } from 'react-router-dom'
import NotreEquipe from '../pages/NotreEquipe'
import NosServices from '../pages/NosServices'
import Accueil from '../pages/Accueil'
import Professionnels from '../pages/Professionnels'
import DernieresVolontées from '../pages/DernieresVolontées'

function Router () {
  return (
    <Routes>
      <Route index path='/' element={<Accueil />} />
      <Route path='/notre-equipe' element={<NotreEquipe />} />
      <Route path='/notre-equipe' element={<NosServices />} />
      <Route path='/dernieres-volontées' element={<DernieresVolontées />} />
      <Route path='/professionnels' element={<Professionnels />} />

    </Routes>
  )
}

export default Router
