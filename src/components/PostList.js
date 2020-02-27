import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    //post reresent an array
    this.state = {
      posts: [],
      errorMsg: ""
    };
  }
  componentDidMount() {
    console.log("in COmponent did mount");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        Post Lists
        {posts.length
          ? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
