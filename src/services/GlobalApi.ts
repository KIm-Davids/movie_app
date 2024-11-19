import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '13e29504eae4ce1137830bc8a7ed0519';


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