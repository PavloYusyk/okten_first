import React, {Component} from 'react';

class Car extends Component {
    render() {
        const {brand,price,year} = this.props.car;
        return (
            <div>
                <div>Brand: {brand}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
        );
    }
}

export {Car};