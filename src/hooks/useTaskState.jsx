import { useState } from "react";

export const useTaskState = () => {
  const [tasks, setTask] = useState(() =>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // estado de los filtros
  const [inputFilter, setInputFilter] = useState('')
  
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

    // guardar el nuevo task en el local storage
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    console.log(newTask);
  };

  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const deleteTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

    // eliminar el task especifico del local storage
   window.localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== id)));
     
    
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

    console.log(tasks)

  }

  const handleEdit = (task)=>{
    setInput(task.text);
    deleteTask(task.id);
    
   }

  //  logica filtros
  const handleChangeInput = (e)=>{

    const newInputFilter = e.target.value.toLowerCase()
    

    const filtered = tasks.filter((task)=>{
      task.text.toLowerCase().includes(newInputFilter)
    })
    setInputFilter(filtered)
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
    inputFilter,
    handleChangeInput
  };
};