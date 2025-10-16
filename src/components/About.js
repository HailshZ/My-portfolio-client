import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import '../styles/About.css';

const About = ({ personalInfo }) => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                {personalInfo?.personal_statement || 
                 "I'm a passionate full-stack developer with expertise in modern web technologies..."}
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <Award size={24} />
                </div>
                <div className="highlight-content">
                  <h3>2+ Years Experience</h3>
                  <p>In full-stack web development</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <Users size={24} />
                </div>
                <div className="highlight-content">
                  <h3>Team Player</h3>
                  <p>Excellent collaboration skills</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <Target size={24} />
                </div>
                <div className="highlight-content">
                  <h3>Goal Oriented</h3>
                  <p>Focused on delivering results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills-preview">
            <h3>Technical Focus</h3>
            <div className="skills-preview">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Cybersecurity</span>
              <span className="skill-tag">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;