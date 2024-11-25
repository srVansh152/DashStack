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
    return { success: true, message: response.data.message ,data :response.data};
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
    const response = await axios.get(`http://localhost:5000/api/auth/profile`,{
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Get profile error:", error);
    return { success: false, message: error.response?.data?.message || "Failed to fetch user profile." };
  }
};

// Update user profile still remain update 
export const updateProfile = async (token, updateData) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/auth/profile`, updateData,{
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });
    return { success: true, message: response.data.message ,data :response.data};
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
    const response = await api.get('/important-numbers');
    return { success: true, data: response.data.data };
  } catch (error) {
    console.error("Error fetching important numbers:", error);
    return { success: false, message: error.response?.data?.message || "Failed to fetch important numbers." };
  }
};

// Create a new important number
export const createImportantNumber = async (numberData) => {
  try {
    const response = await api.post('/important-numbers', numberData);
    return { success: true, data: response.data.data };
  } catch (error) {
    console.error("Error creating important number:", error);
    return { success: false, message: error.response?.data?.message || "Failed to create important number." };
  }
};

// Update an important number
export const updateImportantNumber = async (id, updatedData) => {
  try {
    const response = await api.put(`/important-numbers/${id}`, updatedData);
    return { success: true, data: response.data.data };
  } catch (error) {
    console.error("Error updating important number:", error);
    return { success: false, message: error.response?.data?.message || "Failed to update important number." };
  }
};

// Delete an important number
export const deleteImportantNumber = async (id) => {
  try {
    const response = await api.delete(`/important-numbers/${id}`);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error deleting important number:", error);
    return { success: false, message: error.response?.data?.message || "Failed to delete important number." };
  }
};


// Complaints API functions

// Create a complaint
export const createComplaint = async (complaintData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/complaints/createComplaint`, complaintData, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error creating complaint:", error);
    throw error;
  }
};

// Update a complaint
export const updateComplaint = async (id, updatedData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/complaints/update/${id}`, updatedData, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error updating complaint:", error);
    throw error;
  }
};

// View a specific complaint
export const viewComplaint = async (id, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/complaints/view/${id}`, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error viewing complaint:", error);
    throw error;
  }
};

// Delete a complaint
export const deleteComplaint = async (id, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/complaints/delete/${id}`, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error deleting complaint:", error);
    throw error;
  }
};

// List complaints by society and admin
export const listComplaintsBySocietyAndAdmin = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/complaints/list`, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error listing complaints:", error);
    throw error;
  }
};

// Announcements API functions

// Create an announcement
export const createAnnouncement = async (announcementData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/announcements`, announcementData, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error creating announcement:", error);
    throw error;
  }
};

// Get all announcements
export const getAnnouncements = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/announcements`);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw error;
  }
};

// Get a specific announcement by ID
export const getAnnouncementById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/announcements/${id}`);
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error fetching announcement:", error);
    throw error;
  }
};

// Update an announcement
export const updateAnnouncement = async (id, updatedData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/announcements/${id}`, updatedData, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error updating announcement:", error);
    throw error;
  }
};

// Delete an announcement
export const deleteAnnouncement = async (id, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/announcements/${id}`, { isMultipart: true });
    return { success: true, message: response.data.message ,data :response.data};
  } catch (error) {
    console.error("Error deleting announcement:", error);
    throw error;
  }
};


// Resident Management API Functions

// Create a new resident
export const createResident = async (residentData) => {
  try {
    const response = await api.post('/residents', residentData, { isMultipart: true });
    return { success: true, message: response.data.message, data: response.data };
  } catch (error) {
    console.error("Error creating resident:", error);
    return { success: false, message: error.response?.data?.message || "Failed to create resident." };
  }
};

// Update a resident
export const updateResident = async (id, updatedData) => {
  try {
    const response = await api.put(`/residents/${id}`, updatedData);
    return { success: true, message: response.data.message, data: response.data };
  } catch (error) {
    console.error("Error updating resident:", error);
    return { success: false, message: error.response?.data?.message || "Failed to update resident." };
  }
};

// Delete a resident
export const deleteResident = async (id) => {
  try {
    const response = await api.delete(`/residents/${id}`);
    return { success: true, message: response.data.message };
  } catch (error) {
    console.error("Error deleting resident:", error);
    return { success: false, message: error.response?.data?.message || "Failed to delete resident." };
  }
};

// Get all residents
export const getResidents = async () => {
  try {
    const response = await api.get('/residents');
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching residents:", error);
    return { success: false, message: error.response?.data?.message || "Failed to fetch residents." };
  }
};

// Get resident details by ID
export const getResidentDetails = async (id) => {
  try {
    const response = await api.get(`/residents/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching resident details:", error);
    return { success: false, message: error.response?.data?.message || "Failed to fetch resident details." };
  }
};
