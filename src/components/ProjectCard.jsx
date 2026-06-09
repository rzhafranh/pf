import { motion } from 'framer-motion';
import { getBadgeColor } from '../data';

const ProjectCard = ({ project, onClick }) => {
  const projectTypes = Array.isArray(project.types)
    ? project.types
    : (project.type ? [project.type] : []);
  const primaryType = projectTypes[0] || project.type;
  
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
              primaryType === 'uiux' ? 'B026FF' :
              primaryType === 'coding' ? '888888' :
              primaryType === 'webdev' ? 'FF8800' :
              primaryType === 'ai' ? '6366F1' :
              'FFFF00'
            }?text=${encodeURIComponent(project.title)}`;
          }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {projectTypes.map((type) => {
            const badgeInfo = getBadgeColor(type);
            return (
              <span
                key={`${project.id}-${type}`}
                className={`inline-block ${badgeInfo.bg} px-3 py-1 rounded-md text-white text-xs font-bold w-fit`}
              >
                {badgeInfo.text}
              </span>
            );
          })}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-1 line-clamp-2">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-sm text-white/75 mb-2 line-clamp-2">
            {project.subtitle}
          </p>
        )}
        
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
