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

const getMovieCast = async () => {
    try {
        // Step 1: Fetch popular movies
        const response = await axios.get(`${movieBaseUrl}/movie/popular?api_key=${api_key}`);
        const movies = response.data.results; // Get the list of movies

        // Step 2: Fetch cast for each movie
        const moviesWithCast = await Promise.all(
            movies.map(async (movie) => {
                const castResponse = await axios.get(`${movieBaseUrl}/movie/${movie.id}/credits?api_key=${api_key}`);
                return {
                    movieId: movie.id,
                    title: movie.title,
                    cast: castResponse.data.cast.slice(0, 5), // Limit to the first 5 cast members
                };
            })
        );

        // Step 3: Return only the cast information
        return moviesWithCast;

    } catch (error) {
        console.error("Error fetching cast data", error);
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
    getMovieCast
};