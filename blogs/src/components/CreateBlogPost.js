import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from 'axios';
import { addPost } from '../actions';


class CreateBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      content:""
    };
  }

  addPost = e => {
    console.log("log from create post pagecof userId", this.props.userId);
    e.preventDefault();
    
    const post = {
      id:this.props.posts.id,
      // id: this.props.user.loggedinUser,
     title: this.state.title,
     content: this.state.content
    };
    if(this.props.posts.id){
    this.props.addPost(post);
    this.setState({ title: '', content: '' });
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if(this.props.posts.id){
    console.log("create blog page log:", this.props.user.loggedInUser.id)}
    return (
      <div style={{ marginTop: "20%" }}>
        <form onSubmit={this.addPost}>
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="content"
            value={this.state.content}
            name="content"
          />
          
          <button
            style={{
              backgroundColor: "red",
              borderRadius: "2%",
              margin: "2%",
              color: "white"
            }}
            onClick={e => this.addPost(e)}
          >
            Add Post
          </button>
        </form>
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  fetchingData: state.fetchingData,
  
});

export default connect(
  mapStateToProps,
  { addPost}
)(CreateBlogPost);
