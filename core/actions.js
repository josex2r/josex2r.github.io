import fetch from 'isomorphic-fetch';

export const REQUEST_USER = 'REQUEST_USER';

const requestUser = (username) => ({
  type: REQUEST_USER,
  username
});

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (username, json) => ({
  type: RECEIVE_USER,
  user: username,
  image: json.avatar_url,
  url: json.html_url,
  name: json.name,
  blog: json.blog,
  email: json.email
});

export const getUser = (username) =>
  (dispatch) => {
    dispatch(requestUser(username));

    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(username, json)))
  }
