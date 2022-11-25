import './styles.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import PokemonProp from './components/PokemonProp'
import Pokemones from './components/Pokemones'
import InputName from './components/InputName'
import ProtectedRoutes from './components/ProtectedRoutes'



function App() {

  return (

    <HashRouter>


      <Routes>

        <Route path='/' element={<InputName />}></Route>

        {/* para proteger estas rutas necesito encerrarlas en una ruta nueva
         */}
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokemones' element={<Pokemones />}></Route>
          <Route path='/pokemonprop/:id' element={<PokemonProp />}></Route>
        </Route>

      </Routes>

    </HashRouter>
  )
}

export default App
