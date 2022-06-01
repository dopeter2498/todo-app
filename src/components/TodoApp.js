import React, { useState, useEffect } from "react";


//importing components
import '../App.css';
import Form from './Form'
import ToDoList from './ToDoList'

const TodoApp = () => {
  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(["all"]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  //functions and events

  useEffect(() => {
    getLocalTodos();
    console.log("TWICE");
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }



  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <ToDoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos} />
      </div>
  )
}
export default TodoApp;