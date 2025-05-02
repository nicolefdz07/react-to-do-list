
import Checkbox from "@mui/material/Checkbox";

 export const TasksComponent = ({ tasks, deleteTask, clear, handleCheckBox, }) =>{

      return (
        <>
          <ul>
            {tasks &&
              tasks.map((task) => {
                return (
                  <li key={task.id}>
                    {task.text}

                    <Checkbox
                      checked={task.completed}
                      onClick={() => handleCheckBox(task.id)}
                    />

                    <button onClick={() => deleteTask(task.id)} id={task.id}>❌</button>
                  </li>
                );
              })}
          </ul>
          {tasks.length > 0 && (
          <div className="clear">
            <button onClick={clear}>Clear</button>
          </div>
        )}
        </>
      );
    }