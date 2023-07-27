import axios from "axios";

import {baseURL} from "../constants";

const ApiService = axios.create({baseURL});

export {ApiService}