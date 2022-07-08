import React from "react";

//props-ok
const Form = ({inputText, setInputText, todos, setTodos}) => {
    //Here I can write js code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        //nem refresh-eli az oldalt minden alkalommal
        e.preventDefault();
        setTodos([
            // ha már van benne csak "átmegyünk" rajta 
            ...todos, 
            //create an object
            {text: inputText, completed: false, id: Math.random() * 1000 }  //id-ra nem ilyet kéne használni, hanem installálni kéne egy packaget
        ]);
        setInputText(''); //set state back to 0
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}; 

export default Form;