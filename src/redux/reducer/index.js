import {
  SET_ERROR,
  POST_USER,
  LOGOUT_USER,
  GET_USER,
  GET_USERS,
  GET_ARTICLES,
  GET_ARTICLE_ID,
  GET_EVENTS,
  GET_EVENT_ID,
  GET_COMUNICATIONS,
  GET_COMUNICATION_ID,
  URL_PAYMENT,
  ADD_DONNATE,
  POST_DONATION
} from "../actions/actionName"

const initialState = {
  error:[],
  user: {},
  users: [],
  articles: [],
  article: {},
  events: [],
  event: [],
  donation:[],
  paymenturl: "", //url for buy item
  comunications: [],
  comunication: []
  };

initialState.donation = localStorage.getItem("donation")
  ? JSON.parse(localStorage.getItem("donation"))
  : (initialState.donation = []);

function rootReducer(state = initialState, action) {
    switch (action.type) {
      case SET_ERROR:
             return {
            ...state,
            error: action.payload,
        };
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
/////////////////////donation/////
case URL_PAYMENT: {
  return {
      ...state,
      paymenturl: action.payload
    }
}
case ADD_DONNATE:{
  return{
    ...state,
    donation: action.payload
  }
}
case POST_DONATION: {
  return {
  ...state,
  donationDB: action.payload,
  };
}
        
    
 default:
    return state;
}}

export default rootReducer;