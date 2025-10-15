import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioAPI } from './utils/api';

// The new Render URL is: https://my-portfolio-u2py.onrender.com

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Starting to fetch portfolio data...');
        
        // Test backend connection first using the live Render URL
        try {
          const testResponse = await fetch('https://my-portfolio-u2py.onrender.com/health');
          if (!testResponse.ok) {
            throw new Error(`Backend server returned ${testResponse.status}`);
          }
          console.log('Backend server is reachable');
        } catch (testError) {
          // Updated error message for deployed service
          throw new Error(`Cannot connect to backend server: ${testError.message}. Please check the Render service status.`);
        }

        // Fetch all data sequentially
        console.log('Fetching personal info...');
        const personalInfoRes = await portfolioAPI.getPersonalInfo();
        console.log('Personal info loaded:', personalInfoRes.success);
        
        console.log('Fetching education...');
        const educationRes = await portfolioAPI.getEducation();
        console.log('Education loaded:', educationRes.success);
        
        console.log('Fetching skills...');
        const skillsRes = await portfolioAPI.getSkills();
        console.log('Skills loaded:', skillsRes.success);
        
        console.log('Fetching projects...');
        const projectsRes = await portfolioAPI.getProjects();
        console.log('Projects loaded:', projectsRes.success);

        console.log('Fetching certificates...');
        const certificatesRes = await portfolioAPI.getCertificates();
        console.log('Certificates loaded:', certificatesRes.success);

        if (personalInfoRes.success) setPersonalInfo(personalInfoRes.data);
        if (educationRes.success) setEducation(educationRes.data);
        if (skillsRes.success) setSkills(skillsRes.data);
        if (projectsRes.success) setProjects(projectsRes.data);
        if (certificatesRes.success) setCertificates(certificatesRes.data);

        console.log('All data loaded successfully!');

      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        let errorMessage = err.message || 'Failed to load portfolio data.';
        
        if (err.message.includes('ECONNREFUSED') || err.message.includes('Network Error')) {
          // Updated error message for deployed service
          errorMessage = 'Cannot connect to the backend server. Please check the Render service status and URL.';
        } else if (err.message.includes('timeout')) {
          errorMessage = 'Request timeout. The server is taking too long to respond.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const retryLoading = () => {
    setLoading(true);
    setError(null);
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading portfolio data...</p>
        <p style={{fontSize: '14px', color: '#666', marginTop: '10px'}}>
          Connecting to live backend server...
        </p>
        <div style={{marginTop: '20px'}}>
          <p style={{fontSize: '12px', color: '#999'}}>
            If this takes too long, please ensure the backend server is running on Render.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Connection Error</h2>
        <p>{error}</p>
        <div style={{marginTop: '20px', textAlign: 'left', maxWidth: '500px', margin: '20px auto'}}>
          <h3 style={{marginBottom: '10px'}}>Troubleshooting Steps:</h3>
          <ol style={{textAlign: 'left', display: 'inline-block', marginTop: '10px'}}>
            <li>Verify your internet connection.</li>
            <li>Check the Render dashboard for the status of your backend service.</li>
            <li>Click "Test Backend" to verify the health endpoint directly.</li>
          </ol>
        </div>
        <button 
          onClick={retryLoading} 
          style={{marginTop: '20px'}}
          className="btn btn-primary"
        >
          Retry Connection
        </button>
        <button 
          onClick={() => window.open('https://my-portfolio-u2py.onrender.com/health', '_blank')}
          style={{marginTop: '10px', marginLeft: '10px'}}
          className="btn btn-secondary"
        >
          Test Backend
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Education education={education} />
      <Certificates certificates={certificates} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;
