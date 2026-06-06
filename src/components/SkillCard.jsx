import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillCard = ({ skill, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer group h-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x150/1F1F2E/00D9FF?text=${encodeURIComponent(skill.name)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      </div>
      
      {/* Skill Name */}
      <div className="relative h-full flex items-end p-4">
        <h4 className="text-white font-semibold text-lg">
          {skill.name}
        </h4>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-electric-blue/10 border-2 border-electric-blue/50 rounded-xl"></div>
    </motion.div>
  );
};

export default SkillCard;
