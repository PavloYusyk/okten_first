import React, {Component} from 'react';
import {carsServise} from "../../servises/carsServise";
import {Car} from "./Car/Car";

class Cars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars:[]
        }
    }

    componentDidMount() {
        carsServise.getAll().then(({data}) => this.setState({cars:data}))
    }

    render() {
        return (
            <div>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        );
    }
}

export {Cars};