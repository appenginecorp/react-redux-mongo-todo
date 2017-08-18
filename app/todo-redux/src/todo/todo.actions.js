import axios from 'axios';

const API_URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () => {
  const request = axios.get(`${API_URL}?sort=-createdAt`);
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
};

export const add = (description) => {
  return dispatch => {
    axios.post(API_URL, {description})
      .then(res => dispatch({type: 'TODO_ADDED', payload: dispatch.data}))
      .then(res => dispatch(search()))
  }
};

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${API_URL}/${todo._id}`, {...todo, done: true})
      .then(res => dispatch(search()))
  }
};

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${API_URL}/${todo._id}`, {...todo, done: false})
      .then(res => dispatch(search()))
  }
};
