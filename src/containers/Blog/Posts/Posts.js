import React, {Component} from 'react';
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import './Posts.css';
import {Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

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
        this.props.history.push({pathname: "/posts/" + id});
    }

    render() {

        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                // console.log("post title=" + post.title)
                return (
                    // <Link to={"/" + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>)
                //  </Link>);
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/posts/:id" exact component={FullPost}/>

            </div>
        );
    }

}

export default Posts;