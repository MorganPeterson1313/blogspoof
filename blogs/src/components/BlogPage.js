import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../actions';
import Blog from "./Blog";

export class BlogPage extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <div>
              <Blog key={post.id} post={post} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  fetchingData: state.fetchingData
});

export default connect(
  mapStateToProps,
  { getData }
)(BlogPage);
