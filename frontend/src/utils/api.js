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

  /**
   * Expenses API Functions
   */

  // Add a new expense
  export const addExpense = async (expenseData, token) => {
    try {
      console.log(expenseData,token);
      
      const response = await api.post('/expenses/add', expenseData, { 
        headers: { Authorization: `Bearer ${token}` }
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error adding expense:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to add expense.' };
    }
  };

  // Update an existing expense
  export const updateExpense = async (expenseId,  expenseData) => {
    try {
      const formData = new FormData();
      for (const key in expenseData) {
        formData.append(key, expenseData[key]);
      }

      const response = await api.put(`/expenses/update/${expenseId}`, formData, { isMultipart: true });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error updating expense:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to update expense.' };
    }
  };

  // View a single expense by ID
  export const viewExpense = async (expenseId) => {
    try {
      const response = await api.get(`/expenses/view/${expenseId}`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error fetching expense:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to fetch expense.' };
    }
  };

  // Delete an expense
  export const deleteExpense = async (expenseId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. User might not be authenticated.");
      }
      console.log(expenseId)
      const response = await api.delete(`/expenses/delete/${expenseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Check if the response indicates success
      if (response.status === 200) {
        return { success: true, data: response.data };
      } else {
        return { success: false, message: "Failed to delete expense." };
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to delete expense.' };
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
      const response = await api.put(`/notes/notes/${id}`, noteData);
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error("Error updating note:", error);
      return { success: false, message: error.response?.data?.message || "Failed to update note." };
    }
  };

  // Get all notes for the authenticated user
  export const getNotes = async () => {
    try {
      const response = await api.get('/notes/notes');
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error fetching notes:", error);
      return { success: false, message: error.response?.data?.message || "Failed to fetch notes." };
    }
  };

  // Delete a note
  export const deleteNote = async (id) => {
    try {
      const response = await api.delete(`/notes/notes/${id}`);
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error("Error deleting note:", error);
      return { success: false, message: error.response?.data?.message || "Failed to delete note." };
    }
  };

  // Facility 

  // Add Facility
  export const addFacility = async (facilityData) => {
    try {
      const token = localStorage.getItem('token');
      console.log(facilityData)
      const response = await api.post('/facilities/facility', facilityData);
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error('Add facility error:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to add facility.' };
    }
  };

  // Update Facility
  export const updateFacility = async (facilityId, facilityData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.put(`/facilities/facility/${facilityId}`, facilityData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error('Update facility error:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to update facility.' };
    }
  };

  // Get Facilities
  export const getFacilities = async () => {
    try {
      const response = await api.get('/facilities/facility');
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error('Get facilities error:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to fetch facilities.' };
    }
  };

  // Create a complaint
  export const createComplaint = async (complaintData) => {
    try {
      const response = await api.post('/complaints/createComplaint', complaintData);
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error("Create complaint error:", error);
      return { success: false, message: error.response?.data?.message || "Failed to create complaint." };
    }
  };

  // Update a complaint
  export const updateComplaint = async (id, updateData) => {
    try {
      const response = await api.put(`/complaints/update/${id}`, updateData);
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error("Update complaint error:", error);
      return { success: false, message: error.response?.data?.message || "Failed to update complaint." };
    }
  };

  // View a specific complaint by ID
  export const viewComplaint = async (id) => {
    try {
      const response = await api.get(`/complaints/view/${id}`);
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error("View complaint error:", error);
      return { success: false, message: error.response?.data?.message || "Failed to view complaint." };
    }
  };

  // Delete a complaint
  export const deleteComplaint = async (id) => {
    try {
      const response = await api.delete(`/complaints/delete/${id}`);
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error("Delete complaint error:", error);
      return { success: false, message: error.response?.data?.message || "Failed to delete complaint." };
    }
  };

  // List all complaints for the admin's society
  export const listComplaints = async () => {
    try {
      const response = await api.get('/complaints/list');
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error("List complaints error:", error);
      return { success: false, message: error.response?.data?.message || "Failed to list complaints." };
    }
  };

  // Add a new visitor log
  export const createVisitorLog = async (visitorLogData) => {
    try {
      
      const response = await api.post('/visitor-logs/create', visitorLogData);

      return { success: true, message: response.data.message, data: response.data };
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
      const response = await api.get('/visitor-logs/list');
      return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
      console.error('Get visitor logs error:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch visitor logs.',
      };
    }
  };
