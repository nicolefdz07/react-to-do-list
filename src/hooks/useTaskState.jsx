import { useState } from "react";

export const useTaskState = () => {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();


    const newTask = {
      id: crypto.randomUUID(),
      text: input,
      completed: false,
    };
    if(e.target[0].value === '') return;
    setTask((prevTasks) => [...prevTasks, newTask]);
    setInput("");
    console.log(newTask);
  };

  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const deleteTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
     
    
  };
  const clear = () =>{

    setTask([]);
    
  }
  const handleCheckBox = (id) => {
    
    setTask((prevTasks) => 
      prevTasks.map((task) => 
        task.id === id 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );

    console.log(tasks)

  }


  return {
    tasks,
    input,
    handleSubmit,
    handleChange,
    deleteTask,
    clear,
    handleCheckBox
  };
};