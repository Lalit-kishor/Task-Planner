// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';

function App() {

  let initTodo;

  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Hi",todo);

    setTodos(todos.filter((e) => {
        return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));

  }

  const addTodo = (task,desc)=> {

    let sNo;

    if(todos.length===0)
    {
      sNo = 1;
    }
    else
    {
      sNo = todos[todos.length-1].sNo+1;
    }

    const myTodo = {
      sNo : sNo,
      task : task,
      desc : desc
    }

    setTodos([...todos,myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Header title="Task-List" searchBar = {true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
