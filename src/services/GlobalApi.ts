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


export default {
    getTrendingVideos,
};