import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from "../actions";
import { update } from "../actions";

export class Blog extends Component {

    constructor(props){

        super(props)
        
        this.state = {
        
            updatingPost: false,
            deletePost: false,
            savingPost: false,
            update: false,
            id: this.props.post.id,
            title: this.props.post.title,
            content: this.props.post.content
        }
    }



    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    updatePost = async (event) => {
        const updatedPost = {
            id: this.state.id,
            text: this.state.text,
            content:this.state.content
        }
        event.preventDefault();
        await this.props.update(updatedPost);
        // this.setState({ update: this.state.update })
        this.setState(prevState => ({
            update: !prevState.update
          }));
    }
    
    edit = (event) => {
        
        this.setState(prevState => ({
            update:!prevState.update
          }));
         event.preventDefault();
    }
    
    


    render() {
        return (
            <div>
                { this.state.update?

<form onSubmit={this.updatePost}>
{/* <input  onChange={this.handleInputChange}
        placeholder="imageURL"
        value={this.state.imageURL}
        name="imageURL"/> */}
<input  onChange={this.handleInputChange}
        placeholder="title"
        value={this.state.title}
        name="title"/>
<input  onChange={this.handleInputChange}
        placeholder="content"
        value={this.state.content}
        name="content"/>

<button type="submit">Finish Editing</button>
</form>:


<div style ={{color:'red', fontSize: '30px',}} >

<section>
<strong>BlogSpoof:</strong>
</section>
{/* <section>
<img
style={{width:'300px', height:'300px'  }}
src= {this.props.post.imageURL}
alt={this.props.post.title}

/>
</section> */}
<section>
<strong>Title</strong>{this.props.post.title}
</section>

<section>

<strong>Anonomous</strong> {this.props.post.contents}   
</section>

<button onClick={() => this.props.deletePost(this.props.posts.id)}>
  Delete
</button>
<button onClick={(event)=> this.edit(event)}>Edit</button>
</div>



}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    fetchingData: state.fetchingData,
    deletePost: state.deletePost,
    updatingPost:state.updatingPost
  });
  
  export default connect(
    mapStateToProps,
    {  deletePost, update }


  )(Blog)
