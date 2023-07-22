import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commenService = {
    getAll:() => apiService.getAll(urls.userComments.base),
    create:(comment) => apiService.create(urls.userComments.base, comment)
}

export {commenService}