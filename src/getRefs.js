export default function getRefs() {
    return {
        input: document.querySelector('#search-box'),
        button: document.querySelector('.search-container_button'),
        imagesList: document.querySelector('.gallery'),
    };
}