import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '354cd27ed9026609ad5609d800030fb8',
        language: 'es-ES'
    }
})

export default movieDB;