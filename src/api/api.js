const {
    default: Axios
} = require("axios");

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "31fee8ec-76b8-413a-ab8d-1b886ccb58c6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(Response => {
            return Response.data
        })
    },
    getProfile(id) {
        console.warn("Use profileAPI");
        return profileAPI.getProfile(id);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(Response => {
            return Response.data
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(Response => {
            return Response.data
        })
    }
}
export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(Response => {
            return Response.data})
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(Response => {
            return Response.data
        })
    },
}