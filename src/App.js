import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Players from './components/Players/Players';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Camp from './components/Camp/Camp';
import News from './components/News/News';
import NoPage from './components/NoPage/NoPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sponsors from './components/Sponsors/Sponsors';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="camp" element={<Camp />} />
          <Route path="news" element={<News />} />
          <Route path="players" element={<Players />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Sponsors />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
