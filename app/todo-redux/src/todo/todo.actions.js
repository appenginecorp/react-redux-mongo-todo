import axios from 'axios';

const API_URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${API_URL}?sort=-createdAt${search}`)
      .then((res) => dispatch({type: 'TODO_SEARCHED', payload: res.data}));
  };
};

export const add = (description) => {
  return dispatch => {
    axios.post(API_URL, {description})
      .then(res => dispatch(clear()))
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

export const remove = (todo) => {
  return dispatch => {
    axios.delete(`${API_URL}/${todo._id}`)
      .then(res => dispatch(search()))
  }
};

export const clear = () => {
  return [{type: 'TODO_CLEAR'}, search()]
};
