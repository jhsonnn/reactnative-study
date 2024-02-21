import axios from "axios";

const axiosInstance= axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: "8cf13e6324d6c8283a8fbe870c37c3dc",
        language: "ko-KR"
    }
})

export default axiosInstance;