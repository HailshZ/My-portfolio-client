import axios from 'axios';

// IMPORTANT: Updated to the live Render URL. 
// It will prioritize the REACT_APP_API_URL environment variable (used by Netlify), 
// otherwise, it defaults to the live Render URL.
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://my-portfolio-u2py.onrender.com/api';

console.log('API Base URL:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`Making API request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`API Response received: ${response.status}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.message);
    if (error.code === 'ECONNREFUSED') {
      // Updated message to reflect remote deployment
      console.error('Backend server connection failed. Check the Render service logs or URL.');
    }
    return Promise.reject(error);
  }
);

// API service functions
export const portfolioAPI = {
  getPersonalInfo: async () => {
    try {
      const response = await api.get('/portfolio/personal-info');
      return response.data;
    } catch (error) {
      console.error('Error fetching personal info:', error);
      throw new Error(`Failed to fetch personal info: ${error.message}`);
    }
  },

  getEducation: async () => {
    try {
      const response = await api.get('/portfolio/education');
      return response.data;
    } catch (error) {
      console.error('Error fetching education:', error);
      throw new Error(`Failed to fetch education: ${error.message}`);
    }
  },

  getSkills: async () => {
    try {
      const response = await api.get('/portfolio/skills');
      return response.data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw new Error(`Failed to fetch skills: ${error.message}`);
    }
  },

  getProjects: async () => {
    try {
      const response = await api.get('/portfolio/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw new Error(`Failed to fetch projects: ${error.message}`);
    }
  },

  getCertificates: async () => {
    try {
      const response = await api.get('/portfolio/certificates');
      return response.data;
    } catch (error) {
      console.error('Error fetching certificates:', error);
      throw new Error(`Failed to fetch certificates: ${error.message}`);
    }
  },
};

export default api;
