import { renderPost, renderByCategory, renderBySearch } from './postsFunctions.js';
import PostService from './PostService.js';
renderPost();
const $fillterPicker = document.getElementById('category-picker');
const $spf = document.getElementById('search-posts-field');
$spf.addEventListener('input', event => {
    let searchText = event.target.value;
    if (searchText != '') {
        renderBySearch(searchText.toLowerCase());
    } else {
        renderPost(); 
    }
});
$fillterPicker.addEventListener('change', event => {
    let selectedCategory = event.target.value;

    if (selectedCategory != '') {
        renderByCategory(selectedCategory)
    } else {
        renderPost();
    }
});