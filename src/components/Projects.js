import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import '../styles/Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects?.map((project, index) => (
            <div key={project.id || index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <div className="featured-badge">
                  <Star size={16} />
                  Featured
                </div>
              )}
              
              <div className="project-image">
                <div className="image-placeholder">
                  {project.title.charAt(0)}
                </div>
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
          ))}
        </div>

        {/* Web Vulnerability Scanner Special Section */}
        <div className="special-project">
          <div className="special-project-content">
            <h3>Web Vulnerability Scanner</h3>
            <p>
              A comprehensive web vulnerability scanner developed as part of cybersecurity training. 
              This tool helps identify potential security vulnerabilities in web applications.
            </p>
            <div className="project-technologies" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Cybersecurity</span>
            </div>
            <a 
              href="https://web-vulnerability-scanner0.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Scanner <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;