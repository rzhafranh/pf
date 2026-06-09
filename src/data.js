// Data untuk halaman About Me
export const aboutData = {
  name: "Raihan Zhafran",
  photo: "/images/profile.png", // Ganti dengan path foto Anda
  description: "<span class=\"highlight-word\">UI/UX Designer</span> & <span class=\"highlight-word\">System Developer</span> with a Computer Science background from IPB University, specialized in bridging technical architecture with user-centered functionality. Leveraging a full-stack mentality, from database logic to front-end deployment, to translate complex business requirements into scalable digital solutions. Proven track record of leading cross-functional teams and technical initiatives, delivering robust systems and intuitive design systems in high-stakes environments.",

  // Hard Skills - divided into 4 categories
  // Ganti path icon dengan path gambar logo skill Anda (taruh di folder public/icons/)
  hardSkills: {
    graphicDesignUIUX: [
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Adobe Photoshop", icon: "/icons/photoshop.png" },
      { name: "Adobe Illustrator", icon: "/icons/illustrator.png" },
      { name: "Adobe Lightroom", icon: "/icons/lightroom.png" },
      { name: "Adobe Premiere Pro", icon: "/icons/premiere-pro.png" },
      { name: "Canva", icon: "/icons/canva.png" },
      { name: "CapCut", icon: "/icons/capcut.png" },
    ],
    codingProgramming: [
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "SQL", icon: "/icons/sql.png" },
      { name: "Java", icon: "/icons/java.png" },
      { name: "C++", icon: "/icons/C++.png" },
      { name: "C", icon: "/icons/C.png" },
      { name: "R", icon: "/icons/R.png" },
    ],
    dataScience: [
      { name: "Microsoft PowerBI", icon: "/icons/powerbi.png" },
      { name: "GraphPad Prism", icon: "/icons/graphpad-prism.png" },
      { name: "Jupyter", icon: "/icons/jupyter.png" },
    ],
    other: [
      { name: "Microsoft Office 365", icon: "/icons/msoffice.png" },
      { name: "Google Suite", icon: "/icons/google-suite.png" },
      { name: "React js", icon: "/icons/react.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "Vercel", icon: "/icons/vercel.png" },
    ],
  },

  // Soft Skills
  softSkills: [
    { name: "Critical Thinking", icon: "lightbulb" },
    { name: "Communication", icon: "message-circle" },
    { name: "Teamwork", icon: "users" },
    { name: "Problem Solving", icon: "puzzle" },
    { name: "Leadership", icon: "crown" },
    { name: "Time Management", icon: "clock" },
    { name: "Detail Oriented", icon: "search" },
    { name: "Fast-Learning", icon: "rocket" },
    { name: "Creative", icon: "palette" },
    { name: "Decision Making", icon: "scale" },
    { name: "Adaptive", icon: "rotate-ccw" },
    { name: "Target Oriented", icon: "target" },
    { name: "Public Speaking", icon: "lectern" },
  ],

  // Language Proficiency
  // Ganti path flag dengan gambar bendera negara (taruh di folder public/icons/flags/)
  languages: [
    { name: "Indonesian", level: "Native", flag: "/icons/flags/indonesia.png" },
    { name: "English", level: "Intermediate", flag: "/icons/flags/uk.png" },
  ],
};

// Data untuk Hero Section
export const heroData = {
  mainTitle: "Welcome.",
  subtitle: "to Raihan Zhafran's Gallery",
  description: "Click Below to Begin Your Journey",
};

// Data untuk Experiences - Professional
export const professionalExperiences = [
  {
    id: "prof-1",
    type: "professional", // professional, organization, event
    title: "System Developer Intern",
    company: "PT Astemo Bekasi Manufacturing",
    period: "Oct - Dec 2025",
    image: "/images/PT Astemo.jpg",
    shortDescription: "this is a text",
    fullDescription: "[DESKRIPSI_LENGKAP_PENGALAMAN]",
    skills: [
      {
        id: "skill-1",
        name: "Web Development",
        image: "/placeholder-skill-1.jpg",
        description: "[DESKRIPSI_SKILL_1]",
        gallery: [
          "/placeholder-gallery-1-1.jpg",
          "/placeholder-gallery-1-2.jpg",
          "/placeholder-gallery-1-3.jpg"
        ]
      },
      {
        id: "skill-2",
        name: "Business Process Analysis",
        image: "/placeholder-skill-2.jpg",
        description: "[DESKRIPSI_SKILL_2]",
        gallery: []
      },
      {
        id: "skill-3",
        name: "Database Management",
        image: "/placeholder-skill-3.jpg",
        description: "[DESKRIPSI_SKILL_3]",
        gallery: []
      },
      {
        id: "skill-4",
        name: "System Design",
        image: "/placeholder-skill-4.jpg",
        description: "[DESKRIPSI_SKILL_4]",
        gallery: []
      },
      {
        id: "skill-5",
        name: "Project Management",
        image: "/placeholder-skill-5.jpg",
        description: "[DESKRIPSI_SKILL_5]",
        gallery: []
      },
      {
        id: "skill-6",
        name: "Communication",
        image: "/placeholder-skill-6.jpg",
        description: "[DESKRIPSI_SKILL_6]",
        gallery: []
      }
    ]
  },
  // {
  //   id: "prof-2",
  //   type: "professional",
  //   title: "[NAMA_POSISI_2]",
  //   company: "[NAMA_PERUSAHAAN_2]",
  //   period: "[PERIODE_2]",
  //   image: "/placeholder-prof-2.jpg",
  //   shortDescription: "[DESKRIPSI_SINGKAT_2]",
  //   fullDescription: "[DESKRIPSI_LENGKAP_2]",
  //   skills: [
  //     {
  //       id: "skill-7",
  //       name: "[NAMA_SKILL_7]",
  //       image: "/placeholder-skill-7.jpg",
  //       description: "[DESKRIPSI_SKILL_7]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-8",
  //       name: "[NAMA_SKILL_8]",
  //       image: "/placeholder-skill-8.jpg",
  //       description: "[DESKRIPSI_SKILL_8]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-9",
  //       name: "[NAMA_SKILL_9]",
  //       image: "/placeholder-skill-9.jpg",
  //       description: "[DESKRIPSI_SKILL_9]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-10",
  //       name: "[NAMA_SKILL_10]",
  //       image: "/placeholder-skill-10.jpg",
  //       description: "[DESKRIPSI_SKILL_10]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-11",
  //       name: "[NAMA_SKILL_11]",
  //       image: "/placeholder-skill-11.jpg",
  //       description: "[DESKRIPSI_SKILL_11]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-12",
  //       name: "[NAMA_SKILL_12]",
  //       image: "/placeholder-skill-12.jpg",
  //       description: "[DESKRIPSI_SKILL_12]",
  //       gallery: []
  //     }
  //   ]
  // },
  // {
  //   id: "prof-3",
  //   type: "professional",
  //   title: "[NAMA_POSISI_3]",
  //   company: "[NAMA_PERUSAHAAN_3]",
  //   period: "[PERIODE_3]",
  //   image: "/placeholder-prof-3.jpg",
  //   shortDescription: "[DESKRIPSI_SINGKAT_3]",
  //   fullDescription: "[DESKRIPSI_LENGKAP_3]",
  //   skills: [
  //     {
  //       id: "skill-13",
  //       name: "[NAMA_SKILL_13]",
  //       image: "/placeholder-skill-13.jpg",
  //       description: "[DESKRIPSI_SKILL_13]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-14",
  //       name: "[NAMA_SKILL_14]",
  //       image: "/placeholder-skill-14.jpg",
  //       description: "[DESKRIPSI_SKILL_14]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-15",
  //       name: "[NAMA_SKILL_15]",
  //       image: "/placeholder-skill-15.jpg",
  //       description: "[DESKRIPSI_SKILL_15]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-16",
  //       name: "[NAMA_SKILL_16]",
  //       image: "/placeholder-skill-16.jpg",
  //       description: "[DESKRIPSI_SKILL_16]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-17",
  //       name: "[NAMA_SKILL_17]",
  //       image: "/placeholder-skill-17.jpg",
  //       description: "[DESKRIPSI_SKILL_17]",
  //       gallery: []
  //     },
  //     {
  //       id: "skill-18",
  //       name: "[NAMA_SKILL_18]",
  //       image: "/placeholder-skill-18.jpg",
  //       description: "[DESKRIPSI_SKILL_18]",
  //       gallery: []
  //     }
  //   ]
  // }
];

// Data untuk Experiences - Organizations & Events
export const organizationExperiences = [
  {
    id: "org-1",
    type: "organization",
    title: "Head of Creative and Branding Division",
    company: "Himpunan Mahasiswa Ilmu Komputer IPB",
    period: "Jan - Dec 2025",
    image: "images/Experiences/Organizations & Events/Himalkom25.jpeg",
    shortDescription: "[DESKRIPSI_SINGKAT_1]",
    fullDescription: "[DESKRIPSI_LENGKAP_1]",
    skills: [
      {
        id: "skill-org-1",
        name: "[NAMA_SKILL_ORG_1]",
        image: "/placeholder-skill-org-1.jpg",
        description: "[DESKRIPSI_SKILL_ORG_1]",
        gallery: []
      },
      {
        id: "skill-org-2",
        name: "[NAMA_SKILL_ORG_2]",
        image: "/placeholder-skill-org-2.jpg",
        description: "[DESKRIPSI_SKILL_ORG_2]",
        gallery: []
      },
      {
        id: "skill-org-3",
        name: "[NAMA_SKILL_ORG_3]",
        image: "/placeholder-skill-org-3.jpg",
        description: "[DESKRIPSI_SKILL_ORG_3]",
        gallery: []
      },
      {
        id: "skill-org-4",
        name: "[NAMA_SKILL_ORG_4]",
        image: "/placeholder-skill-org-4.jpg",
        description: "[DESKRIPSI_SKILL_ORG_4]",
        gallery: []
      },
      {
        id: "skill-org-5",
        name: "[NAMA_SKILL_ORG_5]",
        image: "/placeholder-skill-org-5.jpg",
        description: "[DESKRIPSI_SKILL_ORG_5]",
        gallery: []
      },
      {
        id: "skill-org-6",
        name: "[NAMA_SKILL_ORG_6]",
        image: "/placeholder-skill-org-6.jpg",
        description: "[DESKRIPSI_SKILL_ORG_6]",
        gallery: []
      }
    ]
  },
  {
    id: "org-2",
    type: "organization",
    title: "Chairman",
    company: "AgriUX",
    period: "Nov 2023 - Nov2024",
    image: "images/Experiences/Organizations & Events/AgriUX.png",
    shortDescription: "[DESKRIPSI_SINGKAT_2]",
    fullDescription: "[DESKRIPSI_LENGKAP_2]",
    skills: [
      {
        id: "skill-org-7",
        name: "[NAMA_SKILL_ORG_7]",
        image: "/placeholder-skill-org-7.jpg",
        description: "[DESKRIPSI_SKILL_ORG_7]",
        gallery: []
      },
      {
        id: "skill-org-8",
        name: "[NAMA_SKILL_ORG_8]",
        image: "/placeholder-skill-org-8.jpg",
        description: "[DESKRIPSI_SKILL_ORG_8]",
        gallery: []
      },
      {
        id: "skill-org-9",
        name: "[NAMA_SKILL_ORG_9]",
        image: "/placeholder-skill-org-9.jpg",
        description: "[DESKRIPSI_SKILL_ORG_9]",
        gallery: []
      },
      {
        id: "skill-org-10",
        name: "[NAMA_SKILL_ORG_10]",
        image: "/placeholder-skill-org-10.jpg",
        description: "[DESKRIPSI_SKILL_ORG_10]",
        gallery: []
      },
      {
        id: "skill-org-11",
        name: "[NAMA_SKILL_ORG_11]",
        image: "/placeholder-skill-org-11.jpg",
        description: "[DESKRIPSI_SKILL_ORG_11]",
        gallery: []
      },
      {
        id: "skill-org-12",
        name: "[NAMA_SKILL_ORG_12]",
        image: "/placeholder-skill-org-12.jpg",
        description: "[DESKRIPSI_SKILL_ORG_12]",
        gallery: []
      }
    ]
  },
  {
    id: "org-3",
    type: "organization",
    title: "Staff of Creative and Branding Division",
    company: "Himpunan Mahasiswa Ilmu Komputer IPB",
    period: "Jan - Dec 2024",
    image: "images/Experiences/Organizations & Events/Himalkom24.JPG",
    shortDescription: "[DESKRIPSI_SINGKAT_3]",
    fullDescription: "[DESKRIPSI_LENGKAP_3]",
    skills: []
  },
  {
    id: "event-1",
    type: "event",
    title: "Chairman",
    company: "Saung Desain 2024",
    period: "May - Nov 2024",
    image: "images/Experiences/Organizations & Events/SD24.JPG",
    shortDescription: "[DESKRIPSI_SINGKAT_1]",
    fullDescription: "[DESKRIPSI_LENGKAP_1]",
    skills: []
  },
  {
    id: "event-2",
    type: "event",
    title: "Head of UXToday Division",
    company: "ITTODAY 2024",
    period: "Apr - Oct 2024",
    image: "images/Experiences/Organizations & Events/UXToday.png",
    shortDescription: "[DESKRIPSI_SINGKAT_2]",
    fullDescription: "[DESKRIPSI_LENGKAP_2]",
    skills: []
  },
  {
    id: "event-4",
    type: "event",
    title: "Staff of Creative Division",
    company: "Pekan Ilkomerz 60",
    period: "May - Sep 2024",
    image: "images/Experiences/Organizations & Events/PI60.JPG",
    shortDescription: "[DESKRIPSI_SINGKAT_5]",
    fullDescription: "[DESKRIPSI_LENGKAP_5]",
    skills: []
  },
  {
    id: "event-5",
    type: "event",
    title: "Vice Chairperson of the Creative Division",
    company: "IPB Archery Open 2023",
    period: "Aug - Oct 2023",
    image: "images/Experiences/Organizations & Events/IAO23.jpg",
    shortDescription: "[DESKRIPSI_SINGKAT_6]",
    fullDescription: "[DESKRIPSI_LENGKAP_6]",
    skills: []
  },
  {
    id: "event-6",
    type: "event",
    title: "Staff of Media Branding Division",
    company: "Ilkomerz Night 2023",
    period: "Oct - Dec 2023",
    image: "images/Experiences/Organizations & Events/Inight23.JPG",
    shortDescription: "[DESKRIPSI_SINGKAT_6]",
    fullDescription: "[DESKRIPSI_LENGKAP_6]",
    skills: []
  },
  {
    id: "event-7",
    type: "event",
    title: "Staff of Event Division",
    company: "Saung Desain 2023",
    period: "Jul - Nov 2023",
    image: "images/Experiences/Organizations & Events/SD23.JPG",
    shortDescription: "[DESKRIPSI_SINGKAT_7]",
    fullDescription: "[DESKRIPSI_LENGKAP_7]",
    skills: []
  }
];

// Data untuk Projects
export const projectsData = [
    {
    id: "project-1",
    type: "webdev",
    title: "Personal Portfolio Website",
    subtitle: "Web Development Project",
    year: "2026",
    images: [
      "/placeholder-project-6-1.jpg"
    ],
    description: "[DESKRIPSI_PROJECT_6]",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "project-6",
    type: "data", // uiux, coding, webdev, data, ai
    title: "Data Visualization with Microsoft PowerBI",
    subtitle: "Capstone Project",
    year: "2025",
    images: [
      "/placeholder-project-1-1.jpg",
      "/placeholder-project-1-2.jpg",
      "/placeholder-project-1-3.jpg"
    ],
    description: "[DESKRIPSI_PROJECT_1]",
    technologies: ["Microsoft PowerBI"]
  },
  {
    id: "project-2",
    type: "ai",
    title: "Graduation Status Prediction Model with Python",
    subtitle: "Data Mining Final Project",
    year: "2024",
    images: [
      "/placeholder-project-2-1.jpg",
      "/placeholder-project-2-2.jpg"
    ],
    description: "[DESKRIPSI_PROJECT_2]",
    technologies: ["Python"]
  },
  {
    id: "project-3",
    type: "ai",
    title: "Digital Image Processing Projects",
    subtitle: "Digital Image Processing",
    year: "2025",
    images: [
      "/placeholder-project-3-1.jpg"
    ],
    description: "[DESKRIPSI_PROJECT_3]",
    technologies: ["Python"]
  },
  {
    id: "project-4",
    types: ["uiux", "webdev"],
    title: "Reservation System for Clinic in IPB University",
    subtitle: "Software Engineering Final Project",
    year: "2024",
    images: [
      "/placeholder-project-4-1.jpg"
    ],
    description: "[DESKRIPSI_PROJECT_4]",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: "project-5",
    type: "uiux",
    title: "IPB Mobile Attendance Feature Redesign",
    subtitle: "User Experience Design Final Project",
    year: "2024",
    images: [
      "/placeholder-project-5-1.jpg"
    ],
    description: "[DESKRIPSI_PROJECT_5]",
    technologies: ["Figma", "UI/UX", "User Research"]
  },

];

// Data untuk Socials
export const socialsData = {
  photo: "/images/socialpic.png", // Ganti dengan path foto Anda
  message: "Get in touch with me!",
  socials: [
    {
      id: "social-1",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raihan-zhafran/",
      icon: "linkedin"
    },
    {
      id: "social-2",
      name: "GitHub",
      url: "https://github.com/rzhafranh",
      icon: "github"
    },
    {
      id: "social-3",
      name: "Instagram",
      url: "https://www.instagram.com/rzhafranh/",
      icon: "instagram"
    },
    {
      id: "social-4",
      name: "Email",
      url: "mailto:raihanzhafranh@gmail.com",
      icon: "mail"
    },
    {
      id: "social-5",
      name: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=6282260302171&text&type=phone_number&app_absent=0",
      icon: "dribbble"
    },
    {
      id: "social-6",
      name: "Behance",
      url: "https://www.behance.net/raihanzhafran",
      icon: "behance"
    }
  ]
};

// Helper function untuk mendapatkan warna badge berdasarkan tipe
export const getBadgeColor = (type) => {
  const colors = {
    professional: { bg: "bg-red-500", text: "PROFESSIONAL" },
    organization: { bg: "bg-green-500", text: "ORGANIZATION" },
    event: { bg: "bg-blue-500", text: "EVENT" },
    uiux: { bg: "bg-purple-500", text: "UI/UX & GRAPHIC DESIGN" },
    coding: { bg: "bg-gray-500", text: "CODING & PROGRAMMING" },
    webdev: { bg: "bg-orange-500", text: "WEB DEVELOPMENT" },
    data: { bg: "bg-yellow-500", text: "DATA" },
    ai: { bg: "bg-pink-500", text: "MACHINE LEARNING & AI" }
  };
  return colors[type] || colors.professional;
};
