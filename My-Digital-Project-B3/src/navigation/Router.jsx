import { Route, Routes } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import NotreEquipe from '../pages/NotreEquipe'
import NosServices from '../pages/NosServices'
import DernièresVolontées from '../pages/DernièresVolontées'
import Professionnels from '../pages/Professionnels'

function Router () {
  
    return (
      <Routes>
        <Route index path='/' element={<Accueil />} />
        <Route path='/notre Equipe' element={<NotreEquipe />} />
        <Route path='/nos Services' element={<NosServices />} />
        <Route path='/dernières volontées' element={<DernièresVolontées />} />
        <Route path='/professionnels' element={<Professionnels />} />
      </Routes>
    )
  
}

export default Router
