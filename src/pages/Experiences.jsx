import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { professionalExperiences, organizationExperiences } from '../data';
import ExperienceCard from '../components/ExperienceCard';

const Experiences = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const navigate = useNavigate();
  
  const handleCardClick = (experienceId) => {
    navigate(`/experiences/${experienceId}`);
  };
  
  const currentExperiences = activeTab === 'professional' 
    ? professionalExperiences 
    : organizationExperiences;
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent"
        >
          Experiences
        </motion.h1>
        
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('professional')}
            className={`
              px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300
              ${activeTab === 'professional'
                ? 'bg-electric-blue text-dark-bg shadow-glow-blue'
                : 'bg-white/5 text-white/50 hover:text-white/80 hover:bg-white/10'
              }
            `}
          >
            Professional
          </button>
          <button
            onClick={() => setActiveTab('organizations')}
            className={`
              px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300
              ${activeTab === 'organizations'
                ? 'bg-electric-blue text-dark-bg shadow-glow-blue'
                : 'bg-white/5 text-white/50 hover:text-white/80 hover:bg-white/10'
              }
            `}
          >
            Organizations & Events
          </button>
        </motion.div>
        
        {/* Experience Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {currentExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExperienceCard
                experience={experience}
                onClick={() => handleCardClick(experience.id)}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/50 text-sm"
        >
          Hover for Details, Click for More
        </motion.p>
      </div>
    </div>
  );
};

export default Experiences;
