import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {skillList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;