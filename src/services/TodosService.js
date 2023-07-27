import {ApiService} from "./ApiService";
import {urls} from "../constants";

const TodosService = {
    getAll:() => ApiService.get(urls.todos)
}

export {TodosService}