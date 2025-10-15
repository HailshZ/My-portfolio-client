import React from 'react';
import '../styles/Skills.css';

const Skills = ({ skills }) => {
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

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {Object.entries(skills || {}).map(([category, categorySkills]) => (
            <div key={category} className="skill-category card">
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