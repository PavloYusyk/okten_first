import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commentService = {
    getAll:() => apiService.get(urls.userComments.base),
    create:(comment) => apiService.post(urls.userComments.base, comment)
}

export {commentService}