import { useEffect } from "react";
import { useState } from "react";

export const useTaskState = () => {
  const [tasks, setTask] = useState(() =>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // estado para guardar el input de los filtros
  const [filterInput, setFilterInput] = useState("");
  
  const [input, setInput] = useState("");

  // 
  useEffect(()=>{

    // guardar el nuevo task en el local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks])

   

  const handleSubmit = (e) => {
    e.preventDefault();


    const newTask = {
      id: crypto.randomUUID(),
      text: input,
      completed: false,
    };
    if(e.target[0].value.trim() === '') return;
    setTask((prevTasks) => [...prevTasks, newTask]);
    setInput("");

  };

  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const deleteTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

    const updatedTasks = tasks.filter((task) => task.id !== id);
    // eliminar el task especifico del local storage
   window.localStorage.setItem("tasks", JSON.stringify(updatedTasks));
     return updatedTasks;
    
  };
  const clear = () =>{

    window.localStorage.removeItem("tasks");
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

    

  }

  const handleEdit = (task)=>{
    setInput(task.text);
    deleteTask(task.id);
    
   }

   const filteredTasks = tasks.filter((task) => 
    task.text.toLowerCase().includes(filterInput.toLowerCase()));
    console.log( filteredTasks);
     
    const handleInputFilter = (e) =>{
      setFilterInput(e.target.value);
    }


  return {
    tasks,
    input,
    handleSubmit,
    handleChange,
    deleteTask,
    clear,
    handleCheckBox,
    handleEdit,
    handleInputFilter,
    filterInput,
    filteredTasks

     
  };
};