import './App.css';
import Etusivu from './pages/js/Etusivu';
import Asennusohjeet from './pages/js/Asennusohjeet';
import Suunnittelijoille from './pages/js/Suunnittelijoille';
import TerastassunEdut from './pages/js/TerastassunEdut';
import Valesokkelista from './pages/js/Valesokkelista';
import Verkkokauppa from './pages/js/Verkkokauppa';
import Yhteydenotto from './pages/js/Yhteydenotto';
import Ostoskori from './pages/js/Cart';
import Footer from './Footer';
import NavBar from './NavBar';
import { PageSelect } from './NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import {useEffect} from 'react';

function checkPage(pages, link) {
  for (let item of pages) {
    item.style.color = "#cccccc";
    item.style.setProperty("--underline-width", "0%")
  }
  for (let item of pages) {
    if (item.getAttribute("href") == link["pathname"]) {
      item.style.color = "#eeeeee"
      item.style.setProperty("--underline-width", "100%")
    }
  }
}


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    let pages = PageSelect()
    checkPage(pages, location)
  }, [location]);

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

      <Footer />
    </div>
  );
}

export default App;
