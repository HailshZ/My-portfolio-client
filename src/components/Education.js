import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import '../styles/Education.css';

const Education = ({ education }) => {
  // Define the priority order for institutions
  const priorityOrder = {
    'CPU Business and Information Technology College': 1,
    'Satcom Institute of Technology': 2,
    'Berhanena Selam Printing Technology College': 3
  };

  // Sort education by priority order
  const sortedEducation = education ? [...education].sort((a, b) => {
    const priorityA = priorityOrder[a.institution] || 999;
    const priorityB = priorityOrder[b.institution] || 999;
    return priorityA - priorityB;
  }) : [];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {sortedEducation?.map((edu, index) => (
            <div key={edu.id || index} className="timeline-item">
              <div className="timeline-marker">
                <Award size={20} />
              </div>
              
              <div className="timeline-content card">
                <div className="education-header">
                  <h3 className="education-institution">{edu.institution}</h3>
                  <span className={`education-type ${edu.certificate_type?.toLowerCase()}`}>
                    {edu.certificate_type}
                  </span>
                </div>
                
                <div className="education-details">
                  <div className="education-field">
                    {[edu.degree, edu.field_of_study].filter(Boolean).join(' in ')}
                  </div>
                  
                  <div className="education-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{[edu.start_date, edu.end_date].filter(Boolean).join(' - ')}</span>
                    </div>
                    
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  {edu.description && (
                    <p className="education-description">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;