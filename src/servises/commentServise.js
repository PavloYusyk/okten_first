import {jsonApiServise} from "./jsonApiServise";
import {ursl} from "../constants/urls";

class CommentServise{
    getAll(){
        return jsonApiServise.get(ursl.json.comments)
    }
}

export const commentServise = new CommentServise();