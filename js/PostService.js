import PromiseService from './PromiseService.js';
import { posts } from './posts.js';

class PostService extends PromiseService {

    getPosts() {
        return this.getDataAsPromise(posts, 'No Posts Found');
    }

    postItem(title, imageUrl, writtenBy, category, publishDate, article) {
        return `
        <div class="col-md-6 my-5">
            <div class="card">
                <img height="320" class="card-img-top"
                src="${imageUrl}"
                alt="Post Image">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <small>
                        <span>
                        <i class="fa fa-tag"></i>
                        ${category}
                        </span>
                        <span>
                            <i class="fa fa-calendar"></i>
                            ${publishDate}
                        </span>
                        <span>
                            <i class="fa fa-user-circle"></i>
                            ${writtenBy}
                        </span>
                    </small>
                    <p class="card-text">${article}</p>
                </div>
            </div>
        </div>`;
    }
    fillter() {
        
    }
}

export default new PostService();