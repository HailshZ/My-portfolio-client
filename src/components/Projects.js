import React, { useState } from 'react';
import { ExternalLink, Github, Star, Code2, ShieldCheck, Layers, FlaskConical } from 'lucide-react';
import '../styles/Projects.css';

const FILTERS = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'development', label: 'Development', icon: Code2 },
  { id: 'security', label: 'Security', icon: ShieldCheck }
];

const LAB_PLATFORMS = ['Hack The Box', 'TryHackMe', 'OverTheWire'];

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = (projects || []).filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="track-tabs" role="tablist">
          {FILTERS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeFilter === id}
              className={`track-tab ${id === 'security' ? 'track-sec' : id === 'development' ? 'track-dev' : ''} ${activeFilter === id ? 'active' : ''}`}
              onClick={() => setActiveFilter(id)}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => {
            const isSecurity = project.category === 'security';
            const CategoryIcon = isSecurity ? ShieldCheck : Code2;
            return (
              <div
                key={project.id || index}
                className={`project-card ${project.featured ? 'featured' : ''} ${isSecurity ? 'category-security' : 'category-development'}`}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    Featured
                  </div>
                )}

                <div className="project-image">
                  <div className="image-placeholder">
                    <CategoryIcon size={56} strokeWidth={1.5} />
                  </div>
                  <span className="project-category">
                    {isSecurity ? 'Security' : 'Development'}
                  </span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies?.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.project_url && project.project_url !== '#' && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="special-project">
          <div className="special-project-content">
            <FlaskConical size={36} className="special-project-icon" />
            <h3>Hands-on Security Lab Practice</h3>
            <p>
              I sharpen my offensive and defensive skills on intentionally vulnerable
              machines and wargames, alongside events like Ethiopian CyberShield 2026.
            </p>
            <div className="lab-platforms">
              {LAB_PLATFORMS.map((platform) => (
                <span key={platform} className="lab-platform">{platform}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
