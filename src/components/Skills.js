import React, { useState } from 'react';
import { Code2, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import '../styles/Skills.css';

// Skill categories come from the database; this maps each one to a track.
const TRACKS = [
  {
    id: 'dev',
    label: 'Full Stack Development',
    icon: Code2,
    categories: ['Programming Languages', 'Web Development', 'Database Management']
  },
  {
    id: 'sec',
    label: 'Ethical Hacking & Security',
    icon: ShieldCheck,
    categories: ['Offensive Security', 'Defensive Security', 'Systems & Networking', 'Secure Development']
  },
  {
    id: 'other',
    label: 'Design & Soft Skills',
    icon: Sparkles,
    categories: []
  }
];

const trackFor = (category) =>
  TRACKS.find((track) => track.categories.includes(category)) || TRACKS[TRACKS.length - 1];

const Skills = ({ skills }) => {
  const [activeTrack, setActiveTrack] = useState('all');

  const renderProficiencyBar = (proficiency) => {
    const width = `${(proficiency / 5) * 100}%`;
    return (
      <div className="proficiency-bar">
        <div
          className="proficiency-level"
          style={{ width }}
        ></div>
      </div>
    );
  };

  const categories = Object.entries(skills || {})
    .map(([category, categorySkills]) => {
      const track = trackFor(category);
      const order = track.categories.indexOf(category);
      return { category, categorySkills, track, order: order === -1 ? 99 : order };
    })
    .sort((a, b) =>
      TRACKS.indexOf(a.track) - TRACKS.indexOf(b.track) || a.order - b.order
    );

  const visibleCategories = activeTrack === 'all'
    ? categories
    : categories.filter(({ track }) => track.id === activeTrack);

  const tabs = [{ id: 'all', label: 'All Skills', icon: Layers }, ...TRACKS];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="track-tabs" role="tablist">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTrack === id}
              className={`track-tab track-${id} ${activeTrack === id ? 'active' : ''}`}
              onClick={() => setActiveTrack(id)}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleCategories.map(({ category, categorySkills, track }) => (
            <div key={category} className={`skill-category card track-${track.id}`}>
              <span className="skill-track-label">{track.label}</span>
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-items">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-proficiency">
                        {skill.proficiency}/5
                      </span>
                    </div>
                    {renderProficiencyBar(skill.proficiency)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
