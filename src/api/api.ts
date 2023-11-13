import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,

})
export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)

    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },


}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email: string | null, password: string | null, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const profileAPI = {
    getProfile(userId: number) {

        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(UserStatus: string) {
        return instance.put(`profile/status`, {UserStatus})
    },
    savePhoto(photoFile:any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}