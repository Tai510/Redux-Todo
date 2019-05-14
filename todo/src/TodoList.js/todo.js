import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoList } from '../TodoList.js/actions'



class TodoList extends Component {
   constructor(props) {
   super(props);
   this.state = {
   inputValue: '',
   };
   }

   changeValue = e => {
       this.setState({inputValue: e.target.value})
   }

   addlist = e => {
    e.preventDefault();
    this.setState({inputValue: ''})
    this.props.addTodoList(this.state.inputValue)
   }

 render() {
     return (
         <div className='todo-list'>
         <div className='form'>
         {this.props.todo.map((i,index)=>(
              <div>{i.name}</div>
          ))}
         </div>
          <form onSubmit={this.addlist}>
             <div className='add-section'>
             <input
             type='text'
              onChange={this.changeValue}
              value={this.state.inputValue}
              className='input'
              placeholder='Add List Here'>
             </input>
             <button type='submit' className='add'>Add Todo</button>
             <button className='remove'>Remove</button> 
             </div>
          </form>
         </div>
     )
 }   

}

function mapStateToProps(state) {
    return {todo: state.todo};
  }

export default connect(mapStateToProps, {addTodoList: addTodoList})(TodoList) 