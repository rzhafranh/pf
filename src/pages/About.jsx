import { motion } from 'framer-motion';
import { aboutData } from '../data';
import { 
  Lightbulb, MessageCircle, Users, Puzzle, Crown, Clock, Search, Rocket, 
  Palette, Scale, RotateCcw, Target, Lectern, HelpCircle 
} from 'lucide-react';

// Map soft-skill icon names to lucide components
const softSkillIconMap = {
  lightbulb: Lightbulb,
  'message-circle': MessageCircle,
  users: Users,
  puzzle: Puzzle,
  crown: Crown,
  clock: Clock,
  search: Search,
  rocket: Rocket,
  palette: Palette,
  scale: Scale,
  'rotate-ccw': RotateCcw,
  target: Target,
  lectern: Lectern,
};
const getSoftSkillIcon = (name) => softSkillIconMap[name] || HelpCircle;

// Gradient accent colors for each hard-skill category
const categoryMeta = [
  {
    key: 'graphicDesignUIUX',
    title: 'Graphic Design & Editing',
    gradient: 'from-electric-pink to-electric-purple',
    glow: 'rgba(255, 0, 128, 0.35)',
  },
  {
    key: 'codingProgramming',
    title: 'Coding & Programming',
    gradient: 'from-electric-blue to-electric-purple',
    glow: 'rgba(0, 217, 255, 0.35)',
  },
  {
    key: 'dataScience',
    title: 'Data Science',
    gradient: 'from-neon-green to-electric-blue',
    glow: 'rgba(57, 255, 20, 0.35)',
  },
  {
    key: 'other',
    title: 'Other',
    gradient: 'from-neon-yellow to-electric-pink',
    glow: 'rgba(255, 255, 0, 0.35)',
  },
];

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
        
        {/* Profile Content */}
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
              dangerouslySetInnerHTML={{ __html: aboutData.description }}
            />
          </div>
        </motion.div>

        {/* ─────────── Hard Skills Container ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-electric-blue to-electric-pink bg-clip-text text-transparent">
            Hard Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryMeta.map((cat, catIdx) => {
              const skills = aboutData.hardSkills[cat.key] || [];
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + catIdx * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  {/* Category title */}
                  <h3 className={`text-lg font-semibold mb-6 bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                    {cat.title}
                  </h3>

                  {/* Skills grid - 3 columns */}
                  <div className="grid grid-cols-3 gap-6">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="flex flex-col items-center gap-3 group"
                      >
                        {/* Icon container */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center transition-all group-hover:border-electric-blue/40">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        {/* Skill name */}
                        <span className="text-xs md:text-sm text-white/70 font-medium text-center group-hover:text-white/90 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ─────────── Soft Skills Container ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-electric-purple to-electric-pink bg-clip-text text-transparent">
            Soft Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {aboutData.softSkills.map((skill, idx) => {
              const Icon = getSoftSkillIcon(skill.icon);
              return (
                <motion.div
                  key={`${skill.name}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.08 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex flex-col items-center gap-3 group w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(14.285%-21px)]"
                >
                  {/* Icon container — rounded rectangle */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center transition-all group-hover:border-electric-blue/40 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.25)]">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-electric-blue/80 group-hover:text-electric-blue transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm text-white/70 font-medium text-center group-hover:text-white/90 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ─────────── Language Proficiency Container ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
            Language Proficiency
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {aboutData.languages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
                whileHover={{ scale: 1.04, y: -3 }}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 min-w-[220px] transition-all hover:border-electric-blue/30 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]"
              >
                {/* Flag */}
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-10 h-10 object-contain rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />

                {/* Name & level */}
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg">{lang.name}</span>
                  <span className="text-electric-blue/80 text-sm font-medium">{lang.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
