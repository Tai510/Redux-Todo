export const ADDTODOLIST = 'ADDTODOLIST';





export function addTodoList(text) {
    let newTodo = {
    name: text,
    completed: false
    }
    return {
        type: ADDTODOLIST, payload: newTodo
    }
};