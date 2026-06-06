import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursorSpotlight from './components/CursorSpotlight';
import Hero from './components/Hero';
import About from './pages/About';
import Experiences from './pages/Experiences';
import ExperienceDetail from './pages/ExperienceDetail';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg relative overflow-x-hidden">
        {/* Cursor Spotlight Effect */}
        <CursorSpotlight />
        
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-electric-pink/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:id" element={<ExperienceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
