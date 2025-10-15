import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import '../styles/Certificates.css';

const Certificates = ({ certificates }) => {
  const handleImageClick = (imageUrl) => {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>
        
        {certificates && certificates.length > 0 ? (
          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <div key={certificate.id || index} className="certificate-card">
                <div className="certificate-image-container">
                  {certificate.certificate_image_url ? (
                    <>
                      <img 
                        src={certificate.certificate_image_url} 
                        alt={certificate.title}
                        className="certificate-image"
                        onClick={() => handleImageClick(certificate.certificate_image_url)}
                      />
                      <button 
                        className="view-certificate-btn"
                        onClick={() => handleImageClick(certificate.certificate_image_url)}
                      >
                        <Eye size={20} />
                        View Full Size
                      </button>
                    </>
                  ) : (
                    <div className="certificate-placeholder">
                      <span>{certificate.title.charAt(0)}</span>
                      <p>Certificate Image</p>
                    </div>
                  )}
                </div>
                
                <div className="certificate-content">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-organization">{certificate.issuing_organization}</p>
                  <p className="certificate-date">Issued: {certificate.issue_date}</p>
                  
                  {certificate.credential_url && (
                    <a 
                      href={certificate.credential_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <ExternalLink size={16} />
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-certificates">
            <p>Certificates will be displayed here once added.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;