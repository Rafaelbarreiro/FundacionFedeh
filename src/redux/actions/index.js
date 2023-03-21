import axios from "axios";

import {

    POST_USER,
    LOGOUT_USER,
    GET_USER,
    GET_USERS,
    GET_ARTICLES,
    GET_ARTICLE_ID
} from "../actions/actionName"

const URL = "http://localhost:3001";
//const URL = "https://fundacionfedehback-production-c10e.up.railway.app"


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
export function getArticleDetail(id){
  return async dispatch => {
    const article = await axios.get(`${URL}/articles/${id}`);
    const payload = article.data;
    return dispatch({type: GET_ARTICLE_ID, payload})
  }
}

