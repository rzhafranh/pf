import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getBadgeColor } from '../data';

// Helper function to generate a consistent HSL color based on string hashing
const getTechColor = (techName) => {
  let hash = 0;
  const str = techName.trim().toLowerCase();
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  const saturation = 75 + (Math.abs(hash >> 8) % 15); // 75% - 90%
  const lightness = 60 + (Math.abs(hash >> 16) % 10); // 60% - 70%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const ProjectDetailModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageOverlay, setIsImageOverlay] = useState(false);
  const [autoSlideTimer, setAutoSlideTimer] = useState(null);

  const projectTypes = Array.isArray(project.types)
    ? project.types
    : (project.type ? [project.type] : []);
  
  // Auto-slide functionality
  useEffect(() => {
    if (project.images.length > 1 && !isImageOverlay) {
      const timer = setTimeout(() => {
        nextImage();
      }, 3000);
      setAutoSlideTimer(timer);
      
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, isImageOverlay]);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    // Reset timer when manually changing
    if (autoSlideTimer) {
      clearTimeout(autoSlideTimer);
    }
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    // Reset timer when manually changing
    if (autoSlideTimer) {
      clearTimeout(autoSlideTimer);
    }
  };
  
  if (!project) return null;
  
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Image Carousel */}
            <div className="relative h-96 bg-dark-elevated">
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-contain cursor-pointer"
                onClick={() => setIsImageOverlay(true)}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/1F1F2E/00D9FF?text=${encodeURIComponent(project.title)}`;
                }}
              />
              
              {/* Carousel Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  
                  {/* Image Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-electric-blue w-6'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Title */}
              <h2 className="text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              
              {/* Subtitle */}
              <p className="text-xl text-white/70 mb-4">
                {project.subtitle}
              </p>
              
              {/* Badges and Year */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {projectTypes.map((type) => {
                  const badgeInfo = getBadgeColor(type);
                  return (
                    <span
                      key={`${project.id}-${type}`}
                      className={`${badgeInfo.bg} px-3 py-1 rounded-md text-white text-xs font-bold`}
                    >
                      {badgeInfo.text}
                    </span>
                  );
                })}
                <span className="text-white/60">{project.year}</span>
              </div>
              
              {/* Description */}
              <p
                className="text-white/80 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              
              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => {
                    const color = getTechColor(tech);
                    return (
                      <span
                        key={tech}
                        style={{ borderColor: color, color: color }}
                        className="border px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-transparent"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Image Overlay */}
      {isImageOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsImageOverlay(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetailModal;
