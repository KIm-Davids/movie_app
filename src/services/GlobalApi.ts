import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '';


const getTrendingVideos = async () => {
    try{
        console.log(movieBaseUrl)
        const response = await axios.get(`${movieBaseUrl}/movie/popular?api_key=${api_key}`);
        console.log(response)
        return response.data;
    }catch(error){
        console.log("Error fetching trending videos", error);
        throw error;
    }
}

const getPopularSeries = async () => {
    try {
        const response = await axios.get(`${movieBaseUrl}/tv/popular?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching popular TV series", error);
        throw error;
    }
};


const searchMovies = async (query: string) => {
    if(!query) return [];
    try {
        const response = await axios.get(`${movieBaseUrl}/search/movie?api_key=${api_key}&query=${query}`);
        return response.data.results;
    }catch(error){
        console.error("Error fetching search results", error);
        throw error;
    }
}

const getMovieDetail = async (id: string | string[]) => {
    try {
        // Handle cases where the ID might be an array (Next.js router query)
        const movieId = Array.isArray(id) ? id[0] : id;

        const response = await axios.get(
            `${movieBaseUrl}/movie/${movieId}?api_key=${api_key}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details", error);
        throw error;
    }
};



export default {
    getTrendingVideos,
    searchMovies,
    getMovieDetail,
    getPopularSeries,
};