import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ image, title, subtitle, description, techs, demoLink, repoLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative flex flex-col glass-effect rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative h-60 w-full p-4 pb-0">
        <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
          <img 
            src={image} 
            alt={title} 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80" />
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow z-10 -mt-8 relative">
        <h3 className="text-2xl font-bold mb-1 mt-4 drop-shadow-md" style={{ color: 'var(--color-brand-text)' }}>{title}</h3>
        <p className="font-medium text-sm mb-4" style={{ color: 'var(--color-brand-accent)' }}>{subtitle}</p>
        
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-60 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-brand-text-dim)' }}>
            {description}
          </p>
          {techs && (
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10" style={{ color: 'var(--color-brand-text)' }}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
            >
              <FiExternalLink /> Ver App
            </a>
          )}
          {repoLink && (
            <a 
              href={repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              style={{ color: 'var(--color-brand-text)' }}
            >
              <FiGithub /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;