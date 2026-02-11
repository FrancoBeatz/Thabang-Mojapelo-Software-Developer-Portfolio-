import React, { useRef, useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-card group relative h-full"
    >
      <div 
        className="inner-card relative h-full glass-card rounded-3xl overflow-hidden p-4 flex flex-col gap-4"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Visual Header */}
        <div className="relative h-64 rounded-2xl overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-mono text-white border border-white/10 uppercase tracking-tighter">
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-3 bg-gemini-blue text-white rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Info */}
        <div className="px-2 pb-2 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-gemini-blue opacity-70" />
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-gemini-blue transition-colors">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="bg-white/[0.03] rounded-xl p-3 border border-white/5 group-hover:border-gemini-blue/20 transition-colors">
              <span className="text-[10px] font-bold text-gemini-blue uppercase tracking-widest block mb-1">Architecture Solve</span>
              <p className="text-xs text-gray-300 leading-snug">
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