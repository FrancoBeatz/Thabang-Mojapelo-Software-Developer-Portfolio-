import { Project, Skill, SocialLink } from './types';

export const USER_INFO = {
  name: "Thabang Frans Mojapelo",
  title: "Creative Software Developer & Problem Solver",
  email: "mojapelot2@gmail.com",
  phone: "0723481158",
  heroImage: "https://i.ibb.co/mFRx8mcH/IMG-20250920-153812.jpg",
  qualificationImage: "https://i.ibb.co/0RnPH27g/9a9db522-37fe-4342-a3c7-13e6fbdb611d.png",
  tagline: "I transform complex logic into creative, human-centric digital experiences.",
  about: "I am Thabang Frans Mojapelo, a developer who doesn't just write code—I engineer solutions. My passion lies in taking a blank canvas (or a messy problem) and architecting a robust, scalable system using modern tools. Whether it's securing biometric data or enabling real-time communication, I blend technical rigor with a creative spark to build software that matters.",
};

export const PROJECTS: Project[] = [
  {
    id: "bio-vault",
    title: "Bio-vault ATM",
    description: "A high-security banking simulation interface prioritizing biometric authentication flows.",
    problemSolved: "Developed a secure simulation environment to test biometric verification logic without expensive hardware, ensuring seamless user trust and safety.",
    imageUrl: "https://i.ibb.co/5gf5QVrK/bio-vault-atm-netlify-app.png",
    link: "https://bio-vault-atm.netlify.app/",
    techStack: ["React", "Security Logic", "Biometrics UX"]
  },
  {
    id: "nexus-chat",
    title: "Nexus Chat",
    description: "A futuristic real-time messaging platform powered by advanced predictive aesthetics.",
    problemSolved: "Solved complex latency and state synchronization challenges to deliver instant, glitch-free communication across multiple devices.",
    imageUrl: "https://i.ibb.co/TMQPD3Hw/aistudio-google-com-apps-drive-1-K3-Ca-Cv-Hnj-7kp-Nhn-KGPRa-Noupt-ZV4pe-D-show-Preview-true-show-Ass.png",
    link: "https://nexus-chat-live.netlify.app/",
    techStack: ["React", "Real-time API", "Futuristic UI"]
  },
  {
    id: "buyxsell",
    title: "Thabang BuyXSell Shop",
    description: "A comprehensive e-commerce solution for digital and physical marketplaces.",
    problemSolved: "Optimized cart management and checkout flows to reduce abandonment rates, implementing a custom state management solution for instant updates.",
    imageUrl: "https://i.ibb.co/Zz7R4YdG/thabang-shop-netlify-app.png",
    link: "https://thabang-shop.netlify.app/",
    techStack: ["React", "E-commerce", "State Mgmt"]
  },
  {
    id: "child-care",
    title: "Child-Care-Donation",
    description: "A heartfelt donation platform connecting donors with child care initiatives in Africa.",
    problemSolved: "Created a trust-centered UI/UX that simplifies the donation process, removing friction to increase support for vulnerable children.",
    imageUrl: "https://i.ibb.co/rGTqT4j2/child-care-africa-netlify-app.png",
    link: "https://child-care-africa.netlify.app/",
    techStack: ["React", "Social Impact", "UI Design"]
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML & Semantic Structure", category: "Frontend", level: 95 },
  { name: "Tailwind CSS & Creative UI", category: "Frontend", level: 92 },
  { name: "JavaScript / TypeScript", category: "Frontend", level: 90 },
  { name: "React & Modern Hooks", category: "Frontend", level: 94 },
  { name: "Bootstrap Framework", category: "Frontend", level: 85 },
  { name: "Node.js & Express Architecture", category: "Backend", level: 85 },
  { name: "MongoDB & Data Modeling", category: "Backend", level: 82 },
  { name: "Deployment (CI/CD Pipelines)", category: "Tools", level: 88 },
  { name: "Creative Problem Solving", category: "Creative", level: 98 },
  { name: "Automated Systems", category: "Creative", level: 80 },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/FrancoBeatz", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/thabang-frans-mojapelo-5a9166370", icon: "linkedin" },
];