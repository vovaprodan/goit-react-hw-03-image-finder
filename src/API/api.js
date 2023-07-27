import axios from "axios";


axios.defaults.baseURL = 'https://pixabay.com/api/'
    
const fetchSearchQuery = async searchQuery => {
     const response = await axios.get(`/q=cat&page=1&key=37294582-8910eff478423fe25551a6b37&image_type=photo&orientation=horizontal&per_page=12`);
       return response.data;
}
    
export default {
    fetchSearchQuery
};