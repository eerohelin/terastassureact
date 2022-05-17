import './App.css';
import Etusivu from './pages/js/Etusivu';
import Asennusohjeet from './pages/js/Asennusohjeet';
import Suunnittelijoille from './pages/js/Suunnittelijoille';
import TerastassunEdut from './pages/js/TerastassunEdut';
import Valesokkelista from './pages/js/Valesokkelista';
import Verkkokauppa from './pages/js/Verkkokauppa';
import Yhteydenotto from './pages/js/Yhteydenotto';
import Ostoskori from './pages/js/Cart';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Etusivu />} />
        <Route path="/verkkokauppa" element={<Verkkokauppa />} />
        <Route path="/valesokkelista" element={<Valesokkelista />} />
        <Route path="/suunnittelijoille" element={<Suunnittelijoille />} />
        <Route path="/asennusohjeet" element={<Asennusohjeet />} />
        <Route path="/terastassunedut" element={<TerastassunEdut />} />
        <Route path="/yhteydenotto" element={<Yhteydenotto />} />
        <Route path="/ostoskori" element={<Ostoskori />} />
      </Routes>
    </div>
  );
}

export default App;
