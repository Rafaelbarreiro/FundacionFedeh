import {
  POST_USER,
  LOGOUT_USER,
  GET_USER,
  GET_USERS,
  GET_ARTICLES,
  GET_ARTICLE_ID,
  GET_EVENTS,
  GET_EVENT_ID,
  GET_COMUNICATIONS,
  GET_COMUNICATION_ID
} from "../actions/actionName"

const initialState = {
  user: {},
  users: [],
  articles: [],
  article: {},
  events: [],
  event: [],
  comunications: [],
  comunication: []
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

///////////EVENTS///////
case GET_EVENTS: {
  return {
    ...state,
    events: action.payload,
  };
};
case GET_EVENT_ID:
      return {
        ...state,
        event: action.payload,
      };
///////////COMUNICATIONS//////////////
case GET_COMUNICATIONS: {
  return {
    ...state,
    comunications: action.payload,
  };
};
case GET_COMUNICATION_ID:
      return {
        ...state,
        comunication: action.payload,
      };
  
        
    
 default:
    return state;
}}

export default rootReducer;