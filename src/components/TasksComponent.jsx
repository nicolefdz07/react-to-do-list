
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

 export const TasksComponent = ({ tasks, deleteTask, clear, handleCheckBox, handleEdit }) =>{

  
      return (
        <>
          <ul className="tasks-list">
            {tasks &&
              tasks.map((task) => {
                return (
                  <li  key={task.id}>
                    <div className="tasks">
                      <Checkbox
                        checked={task.completed}
                        onClick={() => handleCheckBox(task.id)}
                      />
                      <span className={task.completed ? 'text-task' : ''}>
                        {task.text}</span>
                    </div>
                    <div className="buttons">
                      <button onClick={()=> handleEdit(task)}>
                        <EditIcon style={{color: 'white'}}/>
                      </button>
                      <button onClick={() => deleteTask(task.id)} id={task.id}>
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon style={{color: 'white'}}/>
                      </IconButton>
                      </button>
                    </div>
                    
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