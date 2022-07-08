import React from "react";
//import components
import Todo from './Todo';

const TodoList = () => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
            </ul>
        </div>
    );
};

export default TodoList;