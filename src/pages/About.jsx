import { motion } from 'framer-motion';
import { aboutData } from '../data';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        >
          {/* Photo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-electric-blue/30 shadow-glow-blue">
              <img
                src={aboutData.photo}
                alt={aboutData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300/1F1F2E/00D9FF?text=RZ';
                }}
              />
            </div>
          </motion.div>
          
          {/* Divider */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent"></div>
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/70 mb-2"
            >
              Hi! I am
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-pink to-electric-purple bg-clip-text text-transparent"
            >
              {aboutData.name}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-white/80 leading-relaxed"
            >
              {aboutData.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
