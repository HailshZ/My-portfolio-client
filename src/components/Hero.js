import React from 'react';
import { Eye, ExternalLink, ArrowRight, Code2, ShieldCheck } from 'lucide-react';
import '../styles/Hero.css';

const DEFAULT_PROFILE_PICTURE = '/images/profile.jpg';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-status">
              <span className="status-dot"></span>
              Available for new opportunities
            </span>

            <h1 className="hero-title">
              Hi, I'm <span className="text-primary">Hailemariam Zeleke</span>
            </h1>

            <h2 className="hero-subtitle">
              <span className="role role-dev">Full Stack Developer</span>
              <span className="role-divider">&lt;/&gt;</span>
              <span className="role role-sec">Ethical Hacker</span>
            </h2>

            <p className="hero-description">
              I build modern web applications with React, Node.js and PostgreSQL,
              and I test them the way an attacker would. Trained in Cybersecurity &amp;
              Digital Risk Management through the AAU Qiyas Project.
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
                View CV <Eye size={20} />
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>3.99</strong>
                <span>CGPA, B.Sc. Computer Science</span>
              </div>
              <div className="hero-stat">
                <strong>81/100</strong>
                <span>National CS Exit Exam</span>
              </div>
              <div className="hero-stat">
                <strong>4</strong>
                <span>Security &amp; technical certificates</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <img
                src={personalInfo?.profile_picture_url || DEFAULT_PROFILE_PICTURE}
                alt="Hailemariam Zeleke"
                className="profile-image"
              />
              <span className="avatar-badge badge-dev">
                <Code2 size={16} /> Build
              </span>
              <span className="avatar-badge badge-sec">
                <ShieldCheck size={16} /> Secure
              </span>
            </div>

            <div className="hero-terminal" aria-hidden="true">
              <div className="terminal-bar">
                <span></span><span></span><span></span>
                <em>hazel@portfolio:~</em>
              </div>
              <pre className="terminal-body">
<span className="t-prompt">$</span> whoami{'\n'}
<span className="t-out">hailemariam_zeleke</span>{'\n'}
<span className="t-prompt">$</span> cat roles.txt{'\n'}
<span className="t-dev">[dev]</span> React · Node.js · Express · PostgreSQL{'\n'}
<span className="t-sec">[sec]</span> Pentesting · SIEM · Incident Response{'\n'}
<span className="t-prompt">$</span> <span className="t-cursor">_</span>
              </pre>
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
          {personalInfo?.email && (
            <a href={`mailto:${personalInfo.email}`} className="social-link">
              Email <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
