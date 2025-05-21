import "./App.css";
import { useTaskState } from "./hooks/useTaskState";
import { TasksComponent } from "./components/TasksComponent";

function App() {
  const { tasks, input, handleSubmit, handleChange, deleteTask, clear, handleCheckBox, handleEdit,filterInput,  filteredTasks, handleInputFilter  } =
    useTaskState();

   
  return (
    <div className="app">
      <h1>TO DO LIST </h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Add tasks..."
        />
        <button type="submit">Add Task</button>
      </form>
      <main>
          
        <TasksComponent tasks={tasks} 
        deleteTask={deleteTask}
        clear={clear}
        handleCheckBox={handleCheckBox}
        handleEdit={handleEdit}
        filteredTasks={filteredTasks}
        filterInput={filterInput}
        handleInputFilter={handleInputFilter}
      />
        
      </main>
    </div>
  );
}

export default App;
