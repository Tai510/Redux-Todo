import {ADDTODOLIST } from './TodoList.js/actions';


const initialState = {
    todo: [
    {name: 'ToDo List',
     completed: false}
]
    
}



export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ADDTODOLIST:
       let newTodo = [...state.todo, action.payload];
    return Object.assign({},state,{todo:newTodo});
    default: return state;
    }
}