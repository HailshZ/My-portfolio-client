import React from 'react';
import { Code2, Heart, ExternalLink } from 'lucide-react';
import '../styles/Footer.css';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Code2 className="logo-icon" />
              <span className="logo-text">Hailemariam Zeleke</span>
            </div>
            <p className="footer-description">
              Full Stack Web Developer passionate about creating amazing digital experiences.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              {personalInfo?.github_url && (
                <a href={personalInfo.github_url} target="_blank" rel="noopener noreferrer">
                  GitHub <ExternalLink size={14} />
                </a>
              )}
              {personalInfo?.linkedin_url && (
                <a href={personalInfo.linkedin_url} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ExternalLink size={14} />
                </a>
              )}
              {personalInfo?.telegram_username && (
                <a 
                  href={`https://t.me/${personalInfo.telegram_username.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Telegram <ExternalLink size={14} />
                </a>
              )}
              {personalInfo?.email && (
                <a href={`mailto:${personalInfo.email}`}>
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Hailemariam Zeleke. Made with <Heart size={14} /> using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;