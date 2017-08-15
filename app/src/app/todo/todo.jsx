import React, {Component} from 'react';
import axios from 'axios';

import PageHeader from '../template/header';
import TodoForm from './todo.form';
import TodoList from './todo.list';

const API_URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', list: []};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.refresh();
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${API_URL}?sort=-createdAt${search}`).then((response) => {
      this.setState({...this.state, description, list: response.data});
    });
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(API_URL, {description}).then(() => {
      this.refresh();
    });
  }

  handleChange(event) {
    this.setState({...this.state, description: event.target.value});
  }

  handleRemove(todo) {
    axios.delete(`${API_URL}/${todo._id}`).then(() => {
      this.refresh(this.state.description);
    });
  }

  handleMarkAsDone(todo) {
    axios.put(`${API_URL}/${todo._id}`, {...todo, done: true}).then(() => {
      this.refresh(this.state.description);
    });
  }

  handleMarkAsPending(todo) {
    axios.put(`${API_URL}/${todo._id}`, {...todo, done: false}).then(() => {
      this.refresh(this.state.description);
    });
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd}/>
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}/>
      </div>
    )
  }
}
