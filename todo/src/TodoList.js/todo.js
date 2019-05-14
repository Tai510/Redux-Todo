import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addTodoList } from '../actions'



class TodoList extends Component {
    addTodoList = () => {

    }

 render() {
     return (
         <div className='todo-list'>
             <div className='add-section'>
             <input className='input' placeholder='Add List Here'>
             </input>
             <button className='add'>Add Todo</button>
             <button className='remove'>Remove</button>
             </div>
         </div>
     )
 }   

}

// const mapStateToProps = (state) => {
//     return {
//         todo: state.todo
//     }
// }

export default TodoList/* (mapStateToProps, {})(TodoList) */