import postsService from './PostService.js';
import PostService from './PostService.js';
const $postsRow = document.getElementById('posts-row');

export async function renderPost() {
    $postsRow.innerHTML = '';
    try {
        const posts = await PostService.getPosts();
        posts.forEach(post => {
            const { title, imageUrl, writtenBy, category, publishDate, article } = post;
            $postsRow.innerHTML += postsService.postItem(title, imageUrl, writtenBy, category, publishDate, article)
        })

    } catch (err) {
        $postsRow.innerHTML = `<p><i>${err}</i></p>`;
    }
}
export async function renderByCategory(category) {
    $postsRow.innerHTML = "";
    const posts = await postsService.getPosts();
    const toRender = posts.filter(post => post.category == category);
    toRender.forEach(post => {
        const { title, imageUrl, writtenBy, category, publishDate, article } = post;
        $postsRow.innerHTML += postsService.postItem(title, imageUrl, writtenBy, category, publishDate, article)
    });
}
export async function renderBySearch(text) {
    const posts = await postsService.getPosts();
    const toRender = posts.filter(post => post.title.toLowerCase().includes(text));
    $postsRow.innerHTML = "";
    toRender.forEach(post => {
        const { title, imageUrl, writtenBy, category, publishDate, article } = post;
        $postsRow.innerHTML += postsService.postItem(title, imageUrl, writtenBy, category, publishDate, article)
    });
}