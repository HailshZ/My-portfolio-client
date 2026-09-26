import React from 'react';

const PersonalInfo = ({ personalInfo }) => {
  return (
    <section id="personal-statement">
      <h2>Personal Statement</h2>
      <p>{personalInfo.personal_statement}</p>
    </section>
  );
};

export default PersonalInfo;