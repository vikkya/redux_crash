import React, { Component } from "react";

class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}))
    }
    render(){
        return(
            <div>
                {this.state.posts.map(data => {
                    return (
                        <div>
                            <h4>{data.title}</h4>
                            <p>{data.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Posts;