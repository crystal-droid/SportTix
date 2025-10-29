// import axios from "axios";

// const axiosInstance = axios.create({

//     baseURL: process.env.NEXT_PUBLIC_API,
//     headers: {
//         'x-rapidapi-host': 'sportapi7.p.rapidapi.com'
//     }

// })

// export default axiosInstance



// import axios from "axios";

const api = axios.create({
    baseURL: "https://api.sportmonks.com/v3/football",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;






// src/api.ts
import axios from "axios";

const services = axios.create({
    baseURL: "https://www.thesportsdb.com/api/v2/json/all",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "xxxxxx" // replace with your real key
    },
});
