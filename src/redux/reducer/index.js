import {
  POST_USER,
  LOGOUT_USER,
  GET_USER,
  GET_USERS,
  GET_ARTICLES,
  GET_ARTICLE_ID
} from "../actions/actionName"

const initialState = {
  user: {},
  users: [],
  articles: [],
  article: {}
  };

function rootReducer(state = initialState, action) {
    switch (action.type) {
 ////// USERS /////
 case POST_USER: {
  return {
    ...state,
    user: action.payload,
  };
}

case GET_USER: {
  return {
    ...state,
    user: action.payload,
  };
}
case GET_USERS: {
  return {
    ...state,
    users: action.payload,
  };
}
case LOGOUT_USER: {
  return {
    ...state,
    user: {},
  };
}
///////////ARTICLES///////
case GET_ARTICLES: {
  return {
    ...state,
    articles: action.payload,
  };
};
case GET_ARTICLE_ID:
      return {
        ...state,
        article: action.payload,
      };
        
    
 default:
    return state;
}}

export default rootReducer;