import axios from "axios";
import Notiflix from "notiflix";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29393857-621a457e4e6b44715a66c2c62';
const OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true&';
const PER_PAGE = 39;
let page = 1;

async function fetchImages(nameToSearch) {
    try {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}${OPTIONS}q=${nameToSearch}&page=${page}&per_page=${PER_PAGE}`);
        console.log(response.data.hits);
        return response.data.hits;
    } catch (error) {
        console.log(error);
    }
}

export default { page, fetchImages };