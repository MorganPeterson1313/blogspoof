import {
 FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    UPDATE_POST_START,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
    ADD_POST_START,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE
}
from '../actions';




const initialState = {
    error: '',
    fetchingData: false,
    posts:[],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        posts: action.payload,
        error: ''
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
      case DELETE_POST_START:
        return {
          ...state,
          error: '',
          deletePost: true
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          deletePost: false,
          posts: action.payload,
          error: ''
        };
      case DELETE_POST_FAILURE:
        return {
          ...state,
          deletePost: false,
          error: action.payload
        };
        case UPDATE_POST_START:
      return {
        ...state,
        updatingPost: true,
        update: true,
        error:''
      };
   case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        update: false,
        updatingPost: false,
        error:''
      };
      case UPDATE_POST_FAILURE:
      return {
        ...state,
        update: false,
        updatingPost: false,
        error: action.payload
      };
      case ADD_POST_START:
      return {
        ...state,
        savingPost: true,
        error:''
      };
   case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        savingPost: false,
        error:''
      };
      case ADD_POST_FAILURE:
      return {
        ...state,
        savingPost: false,
        error: action.payload
      };
      
      default:
        return state;
    }
  };
            
export default reducer;