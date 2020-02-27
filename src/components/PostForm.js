import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    //the following method avoid page refresh
    e.preventDefault();
    console.log(this.state);
    //in post method we have to send second parameter the data

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => {
        console.log(this.state);
      })
      .catch(error => {
        console.log("In error block");
        // console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type='text'
              name='userId'
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              name='body'
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
