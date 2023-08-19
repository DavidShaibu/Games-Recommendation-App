import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9cd60a1349774a48a302b37d9b1fe0ee"
    }
})