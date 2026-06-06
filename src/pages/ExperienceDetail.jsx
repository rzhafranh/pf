import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { professionalExperiences, organizationExperiences, getBadgeColor } from '../data';
import SkillCard from '../components/SkillCard';
import SkillDetailModal from '../components/SkillDetailModal';
import { useState } from 'react';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  // Find experience from both arrays
  const allExperiences = [...professionalExperiences, ...organizationExperiences];
  const experience = allExperiences.find(exp => exp.id === id);
  
  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Experience not found</p>
      </div>
    );
  }
  
  const badgeInfo = getBadgeColor(experience.type);
  
  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/experiences')}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </motion.button>
          
          {/* Experience Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Badge */}
            <div className={`inline-block ${badgeInfo.bg} px-4 py-2 rounded-lg text-white text-sm font-bold mb-4`}>
              {badgeInfo.text}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 uppercase">
              {experience.title}
            </h1>
            
            {/* Period */}
            <p className="text-lg text-white/70 mb-6">
              {experience.period}
            </p>
            
            {/* Full Description */}
            <p className="text-white/80 leading-relaxed text-lg max-w-4xl">
              {experience.fullDescription}
            </p>
          </motion.div>
          
          {/* Skills Section */}
          {experience.skills && experience.skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">SKILLS</h2>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {experience.skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <SkillCard
                      skill={skill}
                      onClick={() => setSelectedSkill(skill)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Skill Detail Modal */}
      {selectedSkill && (
        <SkillDetailModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </>
  );
};

export default ExperienceDetail;
