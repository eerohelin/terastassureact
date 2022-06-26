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
import Title from './Title';
import { PageSelect, ResizeListener } from './NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import {useEffect, useState} from 'react';


function App() {

  function checkPage(pages, link) { // Change NAV styling and TITLE & Description text
    for (let item of pages) {
      item.style.color = "#cccccc";
      item.style.setProperty("--underline-width", "0%")
    }
    for (let item of pages) {
      if (item.getAttribute("href") === link["pathname"]) {

        var pathname = link["pathname"]
        if (pathname === "/") {
          setTitle("Terästassu Oy")
          setDescription("Tehokas ratkaisu valesokkelin korjaukseen")
        } else if (pathname.includes("verkkokauppa")) {
          setTitle("Verkkokauppa")
          setDescription("Mikäli mallistostamme ei löydy juuri sinun kohteeseesi sopivaa mallia, niin ratkaisemme kyllä ongelman (kysy sähköpostitse).")
        } else if (pathname.includes("valesokkelista")) {
          setTitle("Valesokkelista Yleisesti")
          setDescription("")
        } else if (pathname.includes("suunnittelijoille")) {
          setTitle("Suunnittelijoille")
          setDescription("")
        } else if (pathname.includes("asennusohjeet")) {
          setTitle("Asennusohjeet")
          setDescription("")
        } else if (pathname.includes("terastassunedut")) {
          setTitle("Terästassun Edut")
          setDescription("")
        } else if (pathname.includes("yhteydenotto")) {
          setTitle("Yhteydenotto")
          setDescription("")
        }

        item.style.color = "#eeeeee"
        item.style.setProperty("--underline-width", "100%")
      }
    }
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const location = useLocation();
  const [title, setTitle] = useState(location["pathname"])
  const [description, setDescription] = useState(null)
  
  useEffect(() => {
    window.scrollTo(0, 0);
    let pages = PageSelect()
    checkPage(pages, location)
  }, [location]);


  window.onresize = ResizeListener

  return (
    <div className="App">
      <NavBar />

      <Title text={title} description={description}/>

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
