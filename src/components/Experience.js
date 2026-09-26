import React from 'react';
import { Calendar, MapPin, Briefcase, ShieldCheck, Code2 } from 'lucide-react';
import '../styles/Education.css';
import '../styles/Experience.css';

const markerIcons = {
  security: ShieldCheck,
  development: Code2
};

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience & Training</h2>

        <div className="education-timeline experience-timeline">
          {experience.map((item, index) => {
            const Icon = markerIcons[item.track] || Briefcase;
            return (
              <div key={item.id || index} className={`timeline-item track-${item.track || 'general'}`}>
                <div className="timeline-marker">
                  <Icon size={20} />
                </div>

                <div className="timeline-content card">
                  <div className="education-header">
                    <div>
                      <h3 className="education-institution">{item.role}</h3>
                      <div className="experience-org">{item.organization}</div>
                    </div>
                    {item.type && (
                      <span className="education-type experience-type">{item.type}</span>
                    )}
                  </div>

                  <div className="education-details">
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    {item.description && (
                      <p className="education-description">{item.description}</p>
                    )}

                    {item.highlights?.length > 0 && (
                      <ul className="experience-highlights">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
