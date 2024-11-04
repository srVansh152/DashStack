import axios from 'axios';

const API_BASE_URL = 'https://socitey-management-system-server.onrender.com/api'; // Unified base URL

// Register user function
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Registration failed due to a server error." };
  }
};

// Create a new society function
export const createSociety = async (societyData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/society/create`, societyData);
    return response.data;
  } catch (error) {
    console.error("Error creating society:", error);
    throw error;
  }
};

// Fetch all societies function
export const getSocieties = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/society`);
    return response.data;
  } catch (error) {
    console.error("Error fetching societies:", error);
    throw error;
  }
};
