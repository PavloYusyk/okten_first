import {ApiService} from "./ApiService";
import {urls} from "../constants";

const PostsService = {
    getById:(id) => ApiService.get(urls.posts.byId(id))
}

export {PostsService}