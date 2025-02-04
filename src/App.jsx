import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Navigation section="about" />} />
          <Route path="/portfolio" element={<Navigation section="portfolio" />} />
          <Route path="/contact" element={<Navigation section="contact" />} />
          <Route path="/resume" element={<Navigation section="resume" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;