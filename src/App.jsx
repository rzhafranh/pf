import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import Navbar from './components/Navbar';
import CursorSpotlight from './components/CursorSpotlight';
import Hero from './components/Hero';
import About from './pages/About';
import Experiences from './pages/Experiences';
import ExperienceDetail from './pages/ExperienceDetail';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

function App() {
  const glowBubbles = useMemo(() => {
    const palette = [
      'rgba(176, 38, 255, 0.26)',
      'rgba(0, 217, 255, 0.22)',
      'rgba(255, 0, 128, 0.20)',
      'rgba(57, 255, 20, 0.14)',
    ];

    return Array.from({ length: 28 }, (_, index) => {
      const size = 120 + Math.random() * 260;
      const duration = (index % 2 === 0 ? 5 : 7) + Math.random() * 1.6;
      const delay = Math.random() * 2;

      return {
        id: index,
        left: 4 + Math.random() * 92,
        top: 6 + Math.random() * 88,
        size,
        duration,
        delay,
        color: palette[index % palette.length],
      };
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-dark-bg relative overflow-x-hidden">
        {/* Cursor Spotlight Effect */}
        <CursorSpotlight />
        
        {/* Background Effects: Neon Aurora Spectrum */}
        <div className="fixed inset-0 -z-10 overflow-hidden bg-dark-bg pointer-events-none">
          {/* Subtle top spectrum wash */}
          <div 
            className="absolute inset-0 opacity-70"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.15), rgba(176, 38, 255, 0.08), transparent 60%)'
            }}
          />
          
          {/* Floating Aurora Blobs with Animation */}
          {/* Blob 1: Cyan/Blue (Top Left) */}
          <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-electric-blue/28 blur-[120px] animate-aurora-1"></div>
          
          {/* Blob 2: Neon Green (Top Right / Middle) */}
          <div className="absolute top-[15%] right-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-neon-green/18 blur-[120px] animate-aurora-2"></div>
          
          {/* Blob 3: Pink (Bottom Left / Middle) */}
          <div className="absolute bottom-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-electric-pink/22 blur-[120px] animate-aurora-3"></div>
          
          {/* Blob 4: Purple (Bottom Right) */}
          <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-electric-purple/25 blur-[120px] animate-aurora-4"></div>

          {/* Randomized glow bubbles */}
          {glowBubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full glow-bubble mix-blend-screen pointer-events-none"
              style={{
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle, ${bubble.color}, transparent 70%)`,
                filter: 'blur(85px)',
                opacity: 0.35,
                animationDuration: `${bubble.duration}s`,
                animationDelay: `${bubble.delay}s`,
              }}
            />
          ))}
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
