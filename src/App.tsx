import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import { PokemonProvider } from './context/PokemonContext';


function App() {
  return (
    <Router>
        <PokemonProvider>
      <Routes>
          <Route path='/' element={ <PokemonList/> } />
          <Route path="/:pokeId" element={<PokemonDetail />} />

      </Routes>
        </PokemonProvider>
    </Router>
  );
}

export default App;
