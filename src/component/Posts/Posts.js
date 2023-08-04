import React, {Component} from 'react';
import {postServise} from "../../servises/postServise";
import {Post} from "./Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        postServise.getAll().then(({data}) => this.setState({posts:data}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export {Posts};