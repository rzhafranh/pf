import { motion } from 'framer-motion';
import { getBadgeColor } from '../data';

const ProjectCard = ({ project, onClick }) => {
  const badgeInfo = getBadgeColor(project.type);
  
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group h-80"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x400/1F1F2E/${
              project.type === 'uiux' ? 'B026FF' :
              project.type === 'coding' ? '888888' :
              project.type === 'webdev' ? 'FF8800' :
              'FFFF00'
            }?text=${encodeURIComponent(project.title)}`;
          }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        {/* Badge */}
        <div className={`inline-block ${badgeInfo.bg} px-3 py-1 rounded-md text-white text-xs font-bold mb-3 w-fit`}>
          {badgeInfo.text}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        {/* Year */}
        <p className="text-sm text-white/70">
          {project.year}
        </p>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-electric-blue/50 rounded-2xl"></div>
    </motion.div>
  );
};

export default ProjectCard;
