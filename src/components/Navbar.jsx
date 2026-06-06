import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'About Me', path: '/about' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Projects', path: '/projects' },
    { name: 'Socials', path: '/socials' },
  ];
  
  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      {/* Fully Rounded Navbar - Pill Shape */}
      <div className="glass-effect rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
        {/* Logo with conditional background */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              text-2xl font-bold cursor-pointer px-4 py-2 rounded-full transition-all duration-300
              ${isHome 
                ? 'bg-white text-[#0A0A0F] shadow-md' 
                : 'text-white hover:bg-white/10'
              }
            `}
          >
            <span className={`
              ${isHome 
                ? 'text-[#0A0A0F]' 
                : 'bg-gradient-to-r from-[#00D9FF] to-[#B026FF] bg-clip-text text-transparent'
              }
            `}>
              RZ
            </span>
          </motion.div>
        </Link>
        
        {/* Nav Links */}
        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300
                  ${isActive(item.path)
                    ? 'bg-white text-[#0A0A0F] shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.name}
              </motion.button>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
