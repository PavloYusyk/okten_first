import {ApiService} from "./ApiService";
import {urls} from "../constants";

const AlbumsService = {
    getAll:() => ApiService.get(urls.albums)
}

export {AlbumsService}