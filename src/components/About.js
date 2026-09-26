import React from 'react';
import { Code2, Crosshair, ShieldCheck, Languages } from 'lucide-react';
import '../styles/About.css';

const DEFAULT_STATEMENT =
  "I'm a Computer Science graduate who works on both sides of the web: I build full-stack applications, and I test and secure them as an ethical hacker.";

const highlights = [
  {
    icon: Code2,
    tone: 'dev',
    title: 'Full Stack Development',
    text: 'End-to-end web apps with React, Node.js, Express and PostgreSQL'
  },
  {
    icon: Crosshair,
    tone: 'sec',
    title: 'Offensive Security',
    text: 'Penetration testing, web vulnerability assessment and CTF practice'
  },
  {
    icon: ShieldCheck,
    tone: 'sec',
    title: 'Defensive Security',
    text: 'SIEM, threat intelligence, incident response and log analysis'
  }
];

const focusGroups = [
  {
    tone: 'dev',
    label: 'Build',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'Python', 'Java']
  },
  {
    tone: 'sec',
    label: 'Break & Defend',
    tags: ['Penetration Testing', 'Nmap', 'Wireshark', 'Scapy', 'SIEM', 'Linux', 'Secure Code Review']
  }
];

const spokenLanguages = [
  { name: 'Amharic', level: 'Native' },
  { name: 'English', level: 'Working proficiency' }
];

const About = ({ personalInfo }) => {
  const paragraphs = (personalInfo?.personal_statement || DEFAULT_STATEMENT)
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about-highlights">
              {highlights.map(({ icon: Icon, tone, title, text }) => (
                <div key={title} className={`highlight-card tone-${tone}`}>
                  <div className="highlight-icon">
                    <Icon size={24} />
                  </div>
                  <div className="highlight-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-skills-preview">
            <h3>Technical Focus</h3>
            {focusGroups.map((group) => (
              <div key={group.label} className={`focus-group tone-${group.tone}`}>
                <span className="focus-label">{group.label}</span>
                <div className="skills-preview">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}

            <div className="about-languages">
              <span className="focus-label">
                <Languages size={16} /> Languages
              </span>
              <ul>
                {spokenLanguages.map((language) => (
                  <li key={language.name}>
                    <strong>{language.name}</strong>
                    <span>{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
