import axios from "axios";

const api = axios.create({
    baseURL: "https://dms-backend-production-080e.up.railway.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;