import axios from "axios";
import {jsonBaseURL} from "../constants/urls";

const jsonApiServise = axios.create({baseURL:jsonBaseURL});

export {jsonApiServise}