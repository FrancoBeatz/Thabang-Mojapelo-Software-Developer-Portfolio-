import React, { useRef, useEffect } from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || !parallaxRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate if the card is visible in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate distance from center of screen
        // rect.top + rect.height/2 is the center of the card
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        
        // Intensity of the parallax effect (0.1 = subtle, 0.5 = strong)
        const intensity = 0.12; 
        
        // Calculate offset
        const yOffset = (cardCenter - screenCenter) * intensity;
        
        // Apply transform directly to DOM element for performance
        parallaxRef.current.style.transform = `translateY(${yOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={cardRef} className="group relative rounded-2xl bg-gemini-surface overflow-hidden border border-white/5 transition-all duration-500 hover:border-gemini-blue/60 hover:shadow-[0_0_30px_rgba(76,139,255,0.15)]">
      
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden transform-gpu">
        <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        
        {/* Parallax Wrapper - Taller than container to allow movement */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[125%] -top-[12.5%] will-change-transform"
        >
          {/* Subtle bounce effect on hover + Parallax on scroll */}
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-1"
          />
        </div>
        
        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gemini-dark via-transparent to-transparent opacity-90 pointer-events-none" />
        
        {/* Tech Stack Tags - Floating */}
        <div className="absolute top-4 right-4 z-20 flex flex-wrap justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0 delay-75">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-1 bg-black/70 border border-gemini-blue/40 rounded-md backdrop-blur-md text-gemini-blue font-mono font-bold tracking-wide shadow-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 z-20 bg-gemini-surface/60 backdrop-blur-sm -mt-12 group-hover:-mt-16 transition-all duration-500 ease-spring">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white origin-left transform transition-all duration-500 ease-spring group-hover:text-gemini-blue group-hover:scale-105 group-hover:opacity-100 opacity-90">
            {project.title}
            </h3>
            <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-full hover:bg-gemini-blue hover:text-white transition-all duration-300 transform hover:rotate-12 hover:scale-110"
            >
            <ExternalLink className="w-4 h-4" />
            </a>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        
        {/* Problem Solved Box - Expands on Hover */}
        <div className="relative overflow-hidden rounded-lg bg-black/50 border-l-2 border-gemini-purple p-3 transform transition-all duration-500 group-hover:bg-gemini-blue/10 group-hover:border-gemini-blue group-hover:shadow-[inset_0_0_20px_rgba(76,139,255,0.05)]">
            <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-gemini-purple flex-shrink-0 mt-0.5 group-hover:text-gemini-blue transition-colors" />
                <div className="space-y-1">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Solved</span>
                    <p className="text-xs text-gray-400 group-hover:text-gray-200 leading-relaxed">
                        {project.problemSolved}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;