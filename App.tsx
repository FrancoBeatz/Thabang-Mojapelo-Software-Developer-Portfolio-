import React from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Cpu, Brain, Sparkles, Terminal } from 'lucide-react';
import { USER_INFO, PROJECTS, SKILLS, SOCIALS } from './constants';
import ProjectCard from './components/ProjectCard';
import GeminiChat from './components/GeminiChat';
import BotAnimation from './components/BotAnimation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gemini-dark text-gray-200 selection:bg-gemini-blue selection:text-white pb-20 relative overflow-x-hidden font-sans">
      
      {/* Background Grid & Effects */}
      <div className="fixed inset-0 bg-grid z-0 pointer-events-none opacity-30"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gemini-blue/20 blur-[130px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gemini-purple/15 blur-[130px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gemini-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
                <span className="absolute inset-0 bg-gemini-blue blur-md opacity-50 group-hover:opacity-100 transition-opacity rounded-full animate-pulse"></span>
                <Terminal className="w-6 h-6 text-white relative z-10" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-gemini-blue transition-colors">Thabang<span className="text-gemini-purple">.dev</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative py-1 hover:text-white transition-colors group">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gemini-blue to-gemini-purple group-hover:w-full transition-all duration-300 ease-spring"></span>
                </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gemini-blue/10 border border-gemini-blue/20 text-xs font-mono text-gemini-blue tracking-wide shadow-[0_0_15px_rgba(76,139,255,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                SYSTEM ONLINE: READY TO DEPLOY
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight drop-shadow-2xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">The Innovative</span>
                <span className="block gradient-text">Software Developer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed border-l-2 border-gemini-blue/30 pl-6">
                {USER_INFO.tagline}
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
                <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-gemini-blue to-gemini-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                        View Projects <Code2 className="w-4 h-4" />
                    </span>
                </a>
                <a href="#contact" className="px-8 py-4 glass-panel text-white font-semibold rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 hover:border-gemini-blue/50 hover:text-gemini-blue">
                    Get in Touch <Mail className="w-4 h-4" />
                </a>
            </div>

            <div className="pt-8 flex gap-6 items-center">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect:</span>
                {SOCIALS.map((social) => (
                    <a 
                        key={social.platform} 
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group/icon relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-gemini-blue transition-all duration-300 ease-spring hover:shadow-[0_0_25px_rgba(76,139,255,0.4)] hover:scale-110 overflow-hidden"
                        title={social.platform}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-gemini-blue to-gemini-purple opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                        {social.icon === 'github' ? (
                          <Github className="w-5 h-5 text-gray-400 group-hover/icon:text-white relative z-10 transition-colors" />
                        ) : (
                          <Linkedin className="w-5 h-5 text-gray-400 group-hover/icon:text-white relative z-10 transition-colors" />
                        )}
                    </a>
                ))}
            </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center">
            {/* Spinning Rings - Enhanced */}
            <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full animate-spin-slow opacity-40"></div>
            <div className="absolute w-[450px] h-[450px] border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse] opacity-50"></div>
            
            <div className="relative w-80 h-80 md:w-96 md:h-96 group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-gemini-blue to-gemini-purple rounded-full blur-3xl opacity-20 animate-pulse-slow group-hover:opacity-40 transition-opacity duration-700"></div>
                <img 
                    src={USER_INFO.heroImage} 
                    alt={USER_INFO.name} 
                    className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl group-hover:shadow-gemini-blue/30"
                />
                
                {/* Tech Cards */}
                <div className="absolute -top-6 -right-6 glass-panel px-5 py-3 rounded-xl flex items-center gap-3 animate-float z-20 border-l-4 border-gemini-purple hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 text-gemini-purple" />
                    <div>
                        <span className="block text-xs font-mono text-gray-400">Status</span>
                        <span className="text-sm font-bold text-white">Creative Mode</span>
                    </div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-panel px-5 py-3 rounded-xl flex items-center gap-3 animate-float z-20 border-l-4 border-gemini-blue hover:scale-110 transition-transform duration-300" style={{animationDelay: '1.5s'}}>
                    <Brain className="w-5 h-5 text-gemini-blue" />
                    <div>
                        <span className="block text-xs font-mono text-gray-400">Focus</span>
                        <span className="text-sm font-bold text-white">Problem Solving</span>
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Skills Marquee Section */}
      <section id="skills" className="py-12 bg-black/40 border-y border-white/5 overflow-hidden backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
             <span className="text-gemini-blue font-mono text-sm tracking-widest uppercase">My Arsenal</span>
        </div>
        <div className="relative flex overflow-x-hidden group mask-gradient-x">
            <div className="py-4 animate-marquee whitespace-nowrap flex gap-8 items-center min-w-full">
                {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                    <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/5 text-gray-300 hover:border-gemini-blue/50 hover:bg-gemini-blue/10 hover:text-white transition-all cursor-crosshair hover:shadow-[0_0_15px_rgba(76,139,255,0.2)]">
                        <Cpu className="w-4 h-4 text-gemini-blue opacity-50" />
                        <span className="font-semibold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Featured <span className="gradient-text">Deployments</span></h2>
                <p className="text-gray-400 max-w-xl text-lg">
                    Real-world solutions engineered for performance, security, and user experience.
                </p>
            </div>
            <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-gemini-blue to-transparent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      {/* About & Qualification Section */}
      <section id="about" className="py-32 bg-gemini-surface/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gemini-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">The Developer <span className="text-gray-500">Behind The Code</span></h2>
                
                <div className="prose prose-invert prose-lg text-gray-400">
                    <p>{USER_INFO.about}</p>
                    <p>
                        My philosophy is simple: <strong className="text-white">Complexity should be internal, simplicity should be external.</strong> 
                        Whether I'm designing a database schema or animating a button, the end goal is always the same—a seamless, impactful user journey.
                    </p>
                </div>

                {/* Surprise Bot */}
                <div className="pt-8">
                    <p className="text-xs font-mono text-gemini-purple mb-4 flex items-center gap-2">
                        <Sparkles className="w-3 h-3" /> 
                        CREATIVITY MODULE LOADED
                    </p>
                    <div className="glass-panel p-6 rounded-2xl inline-block max-w-xs hover:scale-105 transition-transform duration-300 cursor-pointer border-t-2 border-t-gemini-purple/20">
                         <BotAnimation />
                         <p className="text-center text-xs text-gray-500 mt-4">"I am the ghost in the machine."</p>
                    </div>
                </div>
            </div>

            <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-r from-gemini-blue to-gemini-purple rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-700"></div>
                <div className="relative glass-panel p-3 rounded-xl transform transition-transform duration-700 ease-spring group-hover:rotate-y-12 group-hover:rotate-x-6">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-xl"></div>
                    <img 
                        src={USER_INFO.qualificationImage} 
                        alt="Qualification Certificate" 
                        className="w-full rounded-lg shadow-2xl"
                    />
                    <div className="absolute bottom-4 right-4 bg-gemini-blue text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
                        VERIFIED
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gemini-blue/5 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Build The <span className="gradient-text">Impossible</span></h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Have a vision? I have the stack. Let's combine them to create something extraordinary.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                <a href={`mailto:${USER_INFO.email}`} className="group relative px-8 py-5 bg-white text-black font-bold rounded-xl overflow-hidden hover:scale-105 transition-transform ease-spring">
                     <span className="relative z-10 flex items-center gap-3">
                        <Mail className="w-5 h-5" /> {USER_INFO.email}
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a href={`tel:${USER_INFO.phone}`} className="flex items-center justify-center gap-3 px-8 py-5 glass-panel text-white font-bold rounded-xl hover:bg-white/10 hover:border-gemini-blue transition-all hover:scale-105 ease-spring">
                    <Phone className="w-5 h-5" />
                    {USER_INFO.phone}
                </a>
            </div>

            <footer className="border-t border-white/5 pt-12 text-sm text-gray-500 font-mono">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Systems Operational</span>
                </div>
                <p>&copy; {new Date().getFullYear()} Thabang Frans Mojapelo. Built with React.</p>
            </footer>
        </div>
      </section>

      <GeminiChat />

    </div>
  );
};

export default App;