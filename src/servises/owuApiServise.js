import axios from "axios";
import {owuBaseURL} from "../constants/urls";

const owuApiServise = axios.create({baseURL: owuBaseURL});

export {owuApiServise}