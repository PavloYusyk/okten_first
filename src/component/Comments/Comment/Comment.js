import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {name,email,body} = this.props.comment;
        return (
            <div>
               <br/>
               <div>Name: {name}</div>
               <div>Email: {email}</div>
               <div>Body: {body}</div>
            </div>
        );
    }
}

export {Comment};