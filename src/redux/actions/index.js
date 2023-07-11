import axios from "axios";

import {

    POST_USER,
    LOGOUT_USER,
    GET_USER,
    GET_USERS,
    GET_ARTICLES,
    GET_ARTICLE_ID,
    GET_EVENTS,
    GET_EVENT_ID,
    URL_PAYMENT,
    GET_COMUNICATIONS,
    GET_COMUNICATION_ID
} from "../actions/actionName"

// const URL = "http://localhost:3001";

const URL = "https://fedeback-production.up.railway.app"


export async function populateDB() {
  await axios.get(`${URL}/populateDB`);
}


//////////USERS////////
export const postUser = payload => async dispatch => {
  try {
    const res = await axios.post(`${URL}/users`, payload);
    dispatch({ type: POST_USER, payload: res.data });
  } catch (e) {
    return dispatch({ type: SET_ERROR, payload: e });
  }
};

export function getUser(email) {
  return async dispatch => {
    const res = await axios.get(`${URL}/users/${email}`);
    return dispatch({ type: GET_USER, payload: res.data });
  };
}

export function getUsers() {
  return async dispatch => {
    const res = await axios.get(`${URL}/users/`);
    return dispatch({ type: GET_USERS, payload: res.data });
  };
}

export const logoutUser = () => dispatch => {

    return dispatch({ type: LOGOUT_USER });
};

//////////ARTICLES/////////
export function getArticles() {
  return async dispatch => {
    const res = await axios.get(`${URL}/articles/`);
    return dispatch({ type: GET_ARTICLES, payload: res.data });
  };
};
export function getArticleDetail(_id){
  return async dispatch => {
    const article = await axios.get(`${URL}/articles/${_id}`);
    const payload = article.data;
    return dispatch({type: GET_ARTICLE_ID, payload})
  }
}

/////////////EVENTS///////////
export function getEvents(){
  return async dispatch => {
    const res = await axios.get(`${URL}/events/`);
    return dispatch({ type: GET_EVENTS, payload: res.data})
  };
};
export function getEventDetail(_id){
  return async dispatch => {
    const event = await axios.get(`${URL}/events/${_id}`);
    const payload = event.data;
    return dispatch({type: GET_EVENT_ID, payload})
  }
};
export const buyEvent = (datos, _id) => {
  
  return async function(dispatch) {
    const url = await axios.post(`${URL}/events/buy/${_id}`, datos)

    dispatch({ type: URL_PAYMENT, payload: url.data})
    
  }
}

/////////////////COMUNICATION///////////////
export function getComunications(){
  return async dispatch => {
    const res = await axios.get(`${URL}/comunications/`);
    return dispatch({ type: GET_COMUNICATIONS, payload: res.data})
  };
};
export function getComunicationsDetail(id){
  return async dispatch => {
    const event = await axios.get(`${URL}/comunications/${id}`);
    const payload = event.data;
    return dispatch({type: GET_COMUNICATION_ID, payload})
  }
}
