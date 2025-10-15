import React from 'react';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-primary">Hailemariam Zeleke</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <p className="hero-description">
              Passionate about creating modern, responsive web applications 
              with cutting-edge technologies. Specializing in React, Node.js, 
              and PostgreSQL.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </a>
              <a 
                href={personalInfo?.resume_url || '#contact'} 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!personalInfo?.resume_url) {
                    e.preventDefault();
                    alert('CV will be available soon! Please contact me for more information.');
                  }
                }}
              >
                Download CV <Download size={20} />
              </a>
            </div>

            <div className="hero-contacts">
              {personalInfo?.email && (
                <a href={`mailto:${personalInfo.email}`} className="contact-link">
                  {personalInfo.email}
                </a>
              )}
              {personalInfo?.phone && (
                <a href={`tel:${personalInfo.phone}`} className="contact-link">
                  {personalInfo.phone}
                </a>
              )}
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              {personalInfo?.profile_picture_url ? (
                <img 
                  src={personalInfo.profile_picture_url} 
                  alt="Hailemariam Zeleke"
                  className="profile-image"
                />
              ) : (
                <div className="profile-image">
                  <span>HZ</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          {personalInfo?.github_url && (
            <a 
              href={personalInfo.github_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub <ExternalLink size={16} />
            </a>
          )}
          {personalInfo?.linkedin_url && (
            <a 
              href={personalInfo.linkedin_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn <ExternalLink size={16} />
            </a>
          )}
          {personalInfo?.telegram_username && (
            <a 
              href={`https://t.me/${personalInfo.telegram_username.replace('@', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Telegram <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;