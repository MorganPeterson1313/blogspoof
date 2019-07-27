import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from 'axios';
import { addPost } from '../actions';


class CreateBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      contents:""
    };
  }

  addPost = e => {
    console.log("log from create post pagecof id", this.props.id);
    e.preventDefault();
    
    const post = {
      // id:this.props.post.id,
      // id: this.props.user.loggedinUser,
     title: this.state.title,
     contents: this.state.contents
    };
    // if(this.props.posts.id){
    this.props.addPost(post);
    this.setState({ title: '', contents: '' });
    // }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if(this.props.posts.id){
    console.log("create blog page log:", this.props.posts.id)}
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
            placeholder="contents"
            value={this.state.contents}
            name="contents"
          />
          
          <button
            style={{
              backgroundColor: "red",
              borderRadius: "2%",
              margin: "2%",
              color: "white"
            }}
            type="submit"
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
