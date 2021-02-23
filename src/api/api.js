const { default: Axios } = require("axios");

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "31fee8ec-76b8-413a-ab8d-1b886ccb58c6",
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    let response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
  },
  getProfile(id) {
    console.warn("Use profileAPI");
    return profileAPI.getProfile(id);
  },
  async unfollow(id) {
    let response = await instance.delete(`follow/${id}`);
    return response.data;
  },
  async follow(id) {
    let response = await instance.post(`follow/${id}`);
    return response.data;
  },
};

export const profileAPI = {
  async getProfile(id) {
    let response = await instance.get(`profile/${id}`);
    return response.data;
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  async getAuth() {
    let response = await instance.get(`auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe = false) {
    let response = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
    return response.data;
  },
  async logout() {
    let response = await instance.delete(`auth/login`);
    return response.data;
  },
};