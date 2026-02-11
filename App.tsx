import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Cpu, Brain, Sparkles, Terminal, ChevronRight, Binary, Globe, Database, Monitor, MapPin, ExternalLink, Award } from 'lucide-react';
import { USER_INFO, PROJECTS, SKILLS, SOCIALS } from './constants';
import ProjectCard from './components/ProjectCard';
import GeminiChat from './components/GeminiChat';
import BotAnimation from './components/BotAnimation';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gemini-dark selection:bg-gemini-blue selection:text-white">
      
      {/* Interactive Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, rgba(76, 139, 255, 0.08), transparent 80%)`
        }}
      />
      <div className="fixed inset-0 bg-grid opacity-[0.15] z-0 pointer-events-none" />

      {/* Header / Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gemini-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-gemini-blue to-gemini-purple rounded-xl flex items-center justify-center shadow-lg shadow-gemini-blue/20">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">THABANG<span className="text-gemini-blue">.ARCH</span></span>
          </div>
          
          <div className="hidden md:flex gap-10">
            {['Projects', 'Arsenal', 'Profile', 'Connect'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gemini-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a href="#connect" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-all border-gemini-blue/20">
            Secure a Meeting
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gemini-blue/20 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gemini-purple/20 blur-[120px] rounded-full animate-pulse-slow delay-1000 pointer-events-none" />

        <div className="max-w-5xl space-y-10 relative">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Architecting Digital Solutions v3.0
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] gradient-heading">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gemini-blue via-gemini-purple to-gemini-blue bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">FUTURE SYSTEMS.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-400 font-medium leading-relaxed">
            {USER_INFO.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a href="#projects" className="px-10 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-transform flex items-center gap-2 group shadow-2xl shadow-white/10">
              Launch Portfolio <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              {SOCIALS.map(s => (
                <a key={s.platform} href={s.url} target="_blank" className="w-16 h-16 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1 border-white/10">
                  {s.icon === 'github' ? <Github className="w-6 h-6" /> : <Linkedin className="w-6 h-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-gemini-blue font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                <div className="w-8 h-px bg-gemini-blue" /> Case Studies
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter">SELECTED WORKS</h2>
            </div>
            <p className="max-w-md text-gray-500 text-lg leading-relaxed font-medium">
              A curated selection of architecture-heavy applications solving real-world complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Arsenal Section */}
      <section id="arsenal" className="relative py-32 px-6 bg-gemini-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-gemini-purple font-mono text-sm tracking-widest uppercase">The Stack</span>
              <h2 className="text-5xl font-black tracking-tighter">ENGINEERING ARSENAL</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                I don't just use tools; I master them. My stack is carefully selected for performance, maintainability, and creative flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:border-gemini-purple/30">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter">{skill.category}</span>
                    <p className="font-bold text-sm text-gray-200">{skill.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gemini-purple transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gemini-purple/10 blur-[80px] rounded-full animate-pulse" />
            <div className="glass-card rounded-[40px] p-8 aspect-square flex items-center justify-center border-white/10 relative z-10 overflow-hidden">
              <BotAnimation />
              {/* Floating Tech Badges */}
              <div className="absolute top-10 left-10 p-3 glass-card rounded-2xl animate-float">
                <Code2 className="w-6 h-6 text-gemini-blue" />
              </div>
              <div className="absolute bottom-20 right-10 p-3 glass-card rounded-2xl animate-float delay-500">
                <Database className="w-6 h-6 text-gemini-purple" />
              </div>
              <div className="absolute top-1/2 left-1/4 p-3 glass-card rounded-2xl animate-float delay-1000">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile / About Section */}
      <section id="profile" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gemini-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 glass-card">
                <img 
                  src={USER_INFO.heroImage} 
                  alt={USER_INFO.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gemini-blue" />
                    <span className="text-sm font-medium text-gray-300">Johannesburg, South Africa</span>
                  </div>
                  <h3 className="text-3xl font-bold">{USER_INFO.name}</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl font-black tracking-tighter">A PROBLEM-FIRST <br /><span className="text-gemini-blue">DEVELOPER.</span></h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
                  <p>{USER_INFO.about}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-3xl border-white/5 flex gap-4">
                  <div className="w-12 h-12 bg-gemini-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-gemini-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Logic-Driven Design</h4>
                    <p className="text-sm text-gray-500">Prioritizing technical stability and scalability in every line of code.</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-3xl border-white/5 flex gap-4">
                  <div className="w-12 h-12 bg-gemini-purple/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-gemini-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Human-Centric UX</h4>
                    <p className="text-sm text-gray-500">Crafting interfaces that are as intuitive as they are powerful.</p>
                  </div>
                </div>
              </div>

              {/* Education / Qualification Link */}
              <div className="glass-card p-2 rounded-[32px] border-white/5">
                <div className="relative h-48 rounded-[24px] overflow-hidden group/qual">
                  <img 
                    src={USER_INFO.qualificationImage} 
                    alt="Qualifications" 
                    className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover/qual:grayscale-0 group-hover/qual:opacity-100 group-hover/qual:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity group-hover/qual:opacity-0">
                    <span className="text-sm font-mono tracking-widest uppercase">Verified Expertize</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect Section */}
      <footer id="connect" className="relative pt-32 pb-16 px-6 z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gemini-blue/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              READY TO <br /><span className="text-gemini-blue">ARCHITECT?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href={`mailto:${USER_INFO.email}`} className="text-2xl md:text-3xl font-bold hover:text-gemini-blue transition-colors flex items-center gap-4 group">
                {USER_INFO.email}
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </a>
              <span className="hidden md:block w-px h-10 bg-white/10" />
              <a href={`tel:${USER_INFO.phone}`} className="text-2xl md:text-3xl font-bold hover:text-gemini-purple transition-colors flex items-center gap-4 group">
                {USER_INFO.phone}
                <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gemini-blue rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">© 2025 THABANG FRANS MOJAPELO</p>
            </div>

            <div className="flex gap-8">
              {SOCIALS.map(s => (
                <a key={s.platform} href={s.url} target="_blank" className="text-sm font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                  {s.platform}
                </a>
              ))}
            </div>

            <p className="text-xs font-mono text-gray-600 flex items-center gap-2">
              DESIGNED WITH <Brain className="w-3 h-3" /> & <Code2 className="w-3 h-3" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bot */}
      <GeminiChat />

    </div>
  );
};

// Helper components not in separate files
const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default App;