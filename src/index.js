import './css/styles.css';
import API from './fetch-images';
import getRefs from './getRefs';
import MARKUP from './markup';
import axios from 'axios';
import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '29393857-621a457e4e6b44715a66c2c62';
// const OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true&';
// const PER_PAGE = 39;
// let page = 1;

// export async function fetchImages(nameToSearch) {
//     try {
//         const response = await axios.get(`${BASE_URL}?key=${API_KEY}${OPTIONS}q=dog&page=${page}&per_page=${PER_PAGE}`);
//         console.log(response.data.hits);
//         return response.data.hits;
//     } catch (error) {
//         console.log(error);
//     }
// }

const refs = getRefs();

refs.button.addEventListener('click', () => doSearch());

function doSearch() {
    const nameToSearch = refs.input.value.trim().toLowerCase();

    API.fetchImages(nameToSearch)
    .then(images => {
        createMarkup(images);
    })
}

const insertMarkup = (element) => {
    refs.imagesList.insertAdjacentHTML("beforeend", MARKUP(element));
}

function createMarkup(images) { 
    images.forEach(element => {
            insertMarkup(element);
    });     
}