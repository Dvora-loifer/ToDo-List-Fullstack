import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5250';

// הגדרת אינטרספטורים
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`);    
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name);
    const result = await axios.post(`/items`, { name }); 
    return result.data;
  },

  setCompleted: async (id, isComplete, name) => {
    console.log('setCompleted', { id, isComplete});
    console.log('Request body:', { IsComplete: isComplete});
    const result = await axios.put(`/items/${id}`, { Id: id, IsComplete: isComplete, Name:name});
    return result.data;
},

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    const result = await axios.delete(`/items/${id}`);
    return result.data;
  }
};

