// import React, { useState, useEffect } from "react";

// import "./App.css";
// import TaskForm from "./components/TaskForm";
// import TaskColumn from "./components/TaskColumn";
// import todoIcon from "./assets/direct-hit.png";
// import doingIcon from "./assets/glowing-star.png";
// import doneIcon from "./assets/check-mark-button.png";

// const oldTasks = localStorage.getItem("tasks");

// const App = () => {
//   const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleDelete = (taskIndex) => {
//     const newTasks = tasks.filter((task, index) => index !== taskIndex);
//     setTasks(newTasks);
//   };
//   const handleEdit = (id, updatedTask) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === id ? { ...task, ...updatedTask } : task
//     );
//     setTasks(updatedTasks);
//   };
  
  

//   return (
//     <div className="app">
//       <TaskForm setTasks={setTasks} />
//       <main className="app_main">
//         <TaskColumn
//           title="To do"
//           icon={todoIcon}
//           tasks={tasks}
//           status="todo"
//           handleDelete={handleDelete}
//           handleEdit={handleEdit}
//         />
//         <TaskColumn
//           title="Doing"
//           icon={doingIcon}
//           tasks={tasks}
//           status="doing"
//           handleDelete={handleDelete}
//           handleEdit={handleEdit}
//         />
//         <TaskColumn
//           title="Done"
//           icon={doneIcon}
//           tasks={tasks}
//           status="done"
//           handleDelete={handleDelete}
//           handleEdit={handleEdit}
//         />
//       </main>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleEdit = (taskIndex) => {
    setCurrentTask({ ...tasks[taskIndex], index: taskIndex });
  };

  const handleUpdate = (updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === updatedTask.index ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    setCurrentTask(null); // Clear form after update
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} currentTask={currentTask} handleUpdate={handleUpdate} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
};

export default App;
