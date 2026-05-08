import axios from 'axios'

const movieBaseUrl='https://api.themoviedb.org/3';
const api_key='e27df3ef12521a87ddc490f8e522a4bd';
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
export default getTrendingVideos