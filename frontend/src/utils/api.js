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
    console.log(response.data)
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
    const response = await axios.get(`${API_BASE_URL}/auth/profile`,{
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
    const response = await axios.put(`${API_BASE_URL}/auth/profile`, updateData,{
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

