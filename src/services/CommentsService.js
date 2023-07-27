import {ApiService} from "./ApiService";
import {urls} from "../constants";

const CommentsService = {
    getAll:() => ApiService.get(urls.comments)
}

export {CommentsService}