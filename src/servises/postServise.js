import {jsonApiServise} from "./jsonApiServise";
import {ursl} from "../constants/urls";

class PostServise{
    getAll(){
        return jsonApiServise.get(ursl.json.posts)
    }
}

export const postServise = new PostServise();