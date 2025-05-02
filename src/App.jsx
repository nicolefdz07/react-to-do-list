import "./App.css";
import { useTaskState } from "./hooks/useTaskState";
import { TasksComponent } from "./components/TasksComponent";

function App() {
  const { tasks, input, handleSubmit, handleChange, deleteTask, clear, handleCheckBox, handleEdit, inputFilter, handleChangeInput } =
    useTaskState();

   
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Add tasks..."
        />
        <button type="submit">Add Task</button>
      </form>
      <main>
          {/* <form className="filter">
            <input type="text" onChange={handleChangeInput} value={inputFilter} placeholder="Search Tasks"/>
          </form> */}
        <TasksComponent tasks={tasks} 
        deleteTask={deleteTask}
        clear={clear}
        handleCheckBox={handleCheckBox}
        handleEdit={handleEdit}
      />
        
      </main>
    </div>
  );
}

export default App;
