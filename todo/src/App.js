import React from 'react';
import './App.css';
import TodoList from '../src/TodoList.js/todo'
import { connect } from 'react-redux'


function App() {

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    todo: state.todo
  };
}

export default connect(mapStateToProps)(App);
