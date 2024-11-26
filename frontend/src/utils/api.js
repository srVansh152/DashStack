import axios from 'axios';

// Unified base URL
const API_BASE_URL = 'https://socitey-management-system-server.onrender.com/api';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to handle common headers
api.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage or any other storage
    const token = localStorage.getItem('token');
    console.log(token);
    // Add the Authorization header if token exists
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Set Content-Type header for multipart requests
    if (config.isMultipart) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Register admin function not header
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Registration failed due to a server error." };
  }
};

// User login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: error.response?.data?.message || "Login failed due to a server error." };
  }
};

// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, { email });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Forgot password error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to process the forgot password request." };
  }
};

// Verify OTP
export const verifyOtp = async (otpData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, otpData);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("OTP verification error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to verify OTP." };
  }
};


// Reset Password
export const resetPassword = async (resetData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, resetData);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Reset password error:", error);
    return { success: false, message: error.response?.data?.message || "Password reset failed." };
  }
};

// Get user profile still remain update 
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/profile`, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error("Get profile error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to fetch user profile." };
  }
};

// Update user profile still remain update 
export const updateProfile = async (token, updateData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/auth/profile`, updateData,  { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error("Update profile error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to update profile." };
  }
};

// Create a new society function not header
export const createSociety = async (societyData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/society/create`, societyData);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error creating society:", error);
    throw error;
  }
};

// Fetch all societies function not header
export const getSocieties = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/society`);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error fetching societies:", error);
    throw error;
  }
};

// Admin fetch important number  not header
export const fetchImportantNumbers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/important-numbers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching societies:", error);
    throw error;
  }
};

// List all expenses for the authenticated admin's society
export const listExpenses = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found. User might not be authenticated.");
    }
    
    const response = await api.get('/expenses/list', { 
      headers: { Authorization: `Bearer ${token}` }
    });
    
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return { success: false, message: error.response?.data?.message || 'Failed to fetch expenses.' };
  }
};

// --- Notes Management APIs ---

// Add a new note
export const addNote = async (noteData) => {
  try {
    const response = await api.post('/notes/notes', noteData);
    return { success: true, message: response.data.message, data: response.data };
  } catch (error) {
    console.error("Error adding note:", error);
    return { success: false, message: error.response?.data?.message || "Failed to add note." };
  }
};

// Update an existing note
export const updateNote = async (id, noteData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/complaints/createComplaint`, complaintData, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error("Error deleting note:", error);
    return { success: false, message: error.response?.data?.message || "Failed to delete note." };
  }
};

// Facility 

// Add Facility
export const addFacility = async (facilityData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/complaints/update/${id}`, updatedData, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error('Add facility error:', error);
    return { success: false, message: error.response?.data?.message || 'Failed to add facility.' };
  }
};

// Update Facility
export const updateFacility = async (facilityId, facilityData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/complaints/view/${id}`, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error('Update facility error:', error);
    return { success: false, message: error.response?.data?.message || 'Failed to update facility.' };
  }
};

// Get Facilities
export const getFacilities = async () => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/complaints/delete/${id}`, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error('Get facilities error:', error);
    return { success: false, message: error.response?.data?.message || 'Failed to fetch facilities.' };
  }
};

// Create a complaint
export const createComplaint = async (complaintData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/complaints/list`, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error("Create complaint error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to create complaint." };
  }
};

// Update a complaint
export const updateComplaint = async (id, updateData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/announcements`, announcementData, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error("View complaint error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to view complaint." };
  }
};

// Delete a complaint
export const deleteComplaint = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/announcements`);
    return response.data;
  } catch (error) {
    console.error("Delete complaint error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to delete complaint." };
  }
};

// List all complaints for the admin's society
export const listComplaints = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/announcements/${id}`);
    return response.data;
  } catch (error) {
    console.error("List complaints error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to list complaints." };
  }
};

// Add a new visitor log
export const createVisitorLog = async (visitorLogData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/announcements/${id}`, updatedData, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error('Create visitor log error:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to create visitor log.',
    };
  }
};

// Get all visitor logs for the society
export const getVisitorLogs = async () => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/announcements/${id}`, { isMultipart: true });
    return response.data;
  } catch (error) {
    console.error('Get visitor logs error:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch visitor logs.',
    };
  }
};