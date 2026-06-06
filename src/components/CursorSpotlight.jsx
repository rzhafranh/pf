import { useEffect, useState } from 'react';

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      {/* Main spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 217, 255, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Secondary glow layer */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(176, 38, 255, 0.05), transparent 40%)`,
        }}
      />
      
      {/* Subtle inner glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03), transparent 50%)`,
        }}
      />
    </>
  );
};

export default CursorSpotlight;
