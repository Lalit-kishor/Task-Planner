import React, { useState } from "react";

export const AddTodo = (props) => {

  const [task,setTask] = useState("");
  const [desc,setDesc] = useState("");

  const submit =(e)=> {
      e.preventDefault();
      if(!task || !desc)
        alert("Title or description can't be empty!");
      else
        props.addTodo(task,desc);

      setTask("");
      setDesc("");
  }
  return (
    <div className="container my-3">
      <h3>Add Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Title
          </label>
          <input
            type="text" 
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            className="form-control"
            id="task"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text" 
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
};
