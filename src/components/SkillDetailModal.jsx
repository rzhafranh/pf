import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const SkillDetailModal = ({ skill, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasGallery = skill.gallery && skill.gallery.length > 0;
  const images = hasGallery ? skill.gallery : [skill.image];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  if (!skill) return null;
  
  return (
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
          className="bg-dark-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Image Gallery / Single Image */}
          <div className="relative h-80 bg-dark-elevated">
            <img
              src={images[currentImageIndex]}
              alt={skill.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x400/1F1F2E/00D9FF?text=${encodeURIComponent(skill.name)}`;
              }}
            />
            
            {/* Gallery Navigation */}
            {images.length > 1 && (
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
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full">
                  <span className="text-white text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                </div>
              </>
            )}
          </div>
          
          {/* Content */}
          <div className="p-8">
            <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              {skill.name}
            </h3>
            
            <p
              className="text-white/80 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: skill.description }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillDetailModal;
