import {owuApiServise} from "./owuApiServise";
import {ursl} from "../constants/urls";

class CarsServise{
    getAll(){
        return owuApiServise.get(ursl.owu.cars)
    }
}

export const carsServise = new CarsServise();