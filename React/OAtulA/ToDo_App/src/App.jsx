import "./App.css"
import { useReducer, useState, useRef, useEffect } from "react";

//To read the task list if already stored in the localStorage
let taskList = JSON.parse(localStorage.getItem("taskList")) ||[];

function reducer(prevTasks, action) {
  console.log("sometask");
  let newTasks;
  switch (action.type) {
    case "ADD":
      newTasks = [...prevTasks, action.newEntry];
      return newTasks;
    case "EDIT":
      newTasks = [...prevTasks];
      newTasks[action.index] = action.newEntry;
      return newTasks;
    case "DELETE":
      newTasks = prevTasks.filter((task, index) => index !== action.index);
      return newTasks;
    default:
      return prevTasks;
  }
}

//I intend to also add timer and task remainders in the future.

function Task(props) {
  // let FormDisplay = useRef("dispNone");
  let [FormDisplay,setFormDisplay] = useState("dispNone");
  let TaskRef = useRef(null);
  let editedTask = useRef(null);

  function handleDelete() {
    props.taskDispatch({ type: "DELETE", index: props.ind });
  }

  function handleEdit(event) {
    event.preventDefault();
    props.taskDispatch({
      type: "EDIT",
      index: props.ind,
      newEntry: editedTask.current.value
    });
    setFormDisplay("dispNone");
  }

  return (
    <>
      <div className="Task">
        <input type="checkbox" className="taskName" ref={TaskRef} />
        {props.TaskName}
        <form className={FormDisplay} onSubmit={handleEdit}>
          <input type="text" name="EditTask" id="editTask" ref={editedTask} />
          <button type="submit" onClick={() => (setFormDisplay("dispNone") )}>
            Save
          </button>
        </form>
        <button className="edit" onClick={() => setFormDisplay( "visibleTaskEdit")}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}

function App() {
  const [tasks, taskDispatch] = useReducer(reducer, taskList);
  let inputRef = useRef(null);

  function addTask(task, ind) {
    return (
      <li key={ind}>
        <Task TaskName={task} ind={ind} taskDispatch={taskDispatch} />
      </li>
    );
  }

  function addEntry(event) {
    event.preventDefault()
    const newTask = inputRef.current.value;
    taskDispatch({ type: "ADD", newEntry: newTask });
  }

  let taskItems = tasks.length === 0 ? <h2>Empty List</h2> : tasks.map(addTask);
  
  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(tasks));
  },[tasks])

  return (
    <>
      <h1>TO DO List</h1>
      <div className="flexCOntainer">


        <div className="TO_DO_List">
          <input type="text" name="newEntry" id="newEntry" placeholder="Good Task" ref={inputRef} />
          <br />
          <button className="addEntry" onClick={addEntry}>
            Entry
          </button>
          <hr />

          <ul>
            {/* {tasks.length === 0 ? <h2>Empty List</h2> : tasks.map(addTask)} */}
            {taskItems}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
