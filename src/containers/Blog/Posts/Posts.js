import React, {Component} from 'react';
import axios from "../../../axios";
import {Link} from 'react-router-dom';
import Post from "../../../components/Post/Post";
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        // https://jsonplaceholder.typicode.com/posts
        axios.get("/posts")
            .then(response => {
                    const posts = response.data.slice(0, 4);
                    const updatePosts = posts.map(post => {
                            return {
                                ...post, author: "Parker"
                            }
                        }
                    );
                    this.setState({posts: updatePosts});
                    //  console.log(response.data);
                }
            ).catch(error => {
            console.log(error);
            //this.setState({error: true});
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {

        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                // console.log("post title=" + post.title)
                return (<Link to={"/" + post.id} key={post.id} ><Post
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/></Link>);
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }

}

export default Posts;