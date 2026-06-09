import { motion } from 'framer-motion';
import { useState } from 'react';
import { getBadgeColor } from '../data';

const ExperienceCard = ({ experience, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const badgeInfo = getBadgeColor(experience.type);
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        height: isHovered ? '400px' : '300px',
        transition: 'height 0.3s ease-in-out'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/1F1F2E/${
              experience.type === 'professional' ? 'FF0000' :
              experience.type === 'organization' ? '39FF14' :
              '0080FF'
            }?text=${encodeURIComponent(experience.title)}`;
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block ${badgeInfo.bg} px-3 py-1 rounded-md text-white text-xs font-bold mb-3`}
          >
            {badgeInfo.text}
          </motion.div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-2">
            {experience.title}
          </h3>
          
          {/* Company/Organization */}
          <p className="text-sm text-white/80 mb-2">
            {experience.company}
          </p>
          
          {/* Period - NEW! */}
          <p className="text-xs text-white/60 mb-3 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {experience.period}
          </p>
          
          {/* Short Description - only visible on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-sm text-white/90 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: experience.shortDescription }}
            />
          </motion.div>
        </div>
        
        {/* Details Button - only visible on hover */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
          className="bg-white text-dark-bg px-6 py-2 rounded-lg font-semibold hover:bg-electric-blue hover:text-white transition-all duration-300"
        >
          Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
