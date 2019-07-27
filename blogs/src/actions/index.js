






import axios from 'axios';





export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://blog-spoof.herokuapp.com/api/posts")
    .then(res => { 
        console.log("actions log :", res.data)
 dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
    });
};

export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const deletePost = (id) => dispatch => {
  
  dispatch({ type: DELETE_POST_START });
  axios
    .delete(`https://blog-spoof.herokuapp.com/api/posts/${id}`)
    .then(res => { 
      console.log("actions log :",res.data)
      dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_POST_FAILURE, payload: err });
    });
};

export const UPDATE_POST_START = 'UPDATE_POST_START';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const  update = updatedPost=> dispatch => {
  console.log("actions log from post action",updatedPost);
dispatch({type: UPDATE_POST_START });
axios
.put(`https://blog-spoof.herokuapp.com/api/posts/${updatedPost.id}`, updatedPost)
.then(res => {
  dispatch({type:UPDATE_POST_SUCCESS, payload: res.data});
  return true;
})
.catch(err => console.log(err));
};


export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const addPost = (post) => dispatch => {
  console.log( "action log for creating a post",post);
  dispatch({ type: ADD_POST_START });
  axios
      .post("https://blog-spoof.herokuapp.com/api/posts", post)
      .then(res => { 
        console.log("actions log for adding a post :", res)
        dispatch({ type: ADD_POST_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_POST_FAILURE, payload: err });
      });
  };
