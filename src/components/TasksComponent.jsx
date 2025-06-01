
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

 export const TasksComponent = ({ tasks, deleteTask, clear, handleCheckBox, handleEdit, handleInputFilter, filterInput, filteredTasks}) =>{
  
   
  
      return (
        <>
          {tasks.length > 0 && (
           <form onSubmit={(e) => e.preventDefault()}
           className="filter-form">
            <input className="filter-task-btn" type="text"
            placeholder="Filter tasks"
            value={filterInput}
            onChange={handleInputFilter} />
           </form>
          )}
          <ul className="tasks-list">
            {filteredTasks && filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <li className="li-task" key={task.id}>
                  <div className="tasks">
                    <Checkbox 
                      checked={task.completed}
                      onClick={() => handleCheckBox(task.id)}
                      // estilos
                      sx={{
                        color: 'rgba(188, 61, 94, 1)', 
                        '&.Mui-checked': {
                          color: ' rgba(188, 61, 94, 1)', 
                        },
                        '& .MuiSvgIcon-root': {
                          fontSize: 30,         
                          width: 50,
                          height: 35,
                        },
                        
                      }}
                    />
                    <span className={task.completed ? 'text-task' : ''}>
                      {task.text}</span>
                  </div>
                  <div className="buttons">
                    <button className="edit-btn btn" onClick={()=> handleEdit(task)}>
                      <EditIcon style={{color: 'white'}}/>
                    </button>
                    <button className="delete-btn btn"
                    onClick={() => deleteTask(task.id)} id={task.id}>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon style={{color: 'white'}}/>
                    </IconButton>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              filterInput.trim().length > 0 && <p className="no-tasks">No tasks found</p>
            )}
          </ul>
          {tasks.length > 0 && (
          <div className="clear">
            <button className="clear-btn" onClick={clear}>Clear</button>
          </div>
        )}
        </>
      );
    }