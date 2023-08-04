import React, {Component} from 'react';
import {commentServise} from "../../servises/commentServise";
import {Comment} from "./Comment/Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }

    componentDidMount() {
        commentServise.getAll().then(({data}) => this.setState({comments:data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export {Comments};