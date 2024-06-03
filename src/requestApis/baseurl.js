import axios from "axios";

// Create an instance with baseUrl

const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default instance