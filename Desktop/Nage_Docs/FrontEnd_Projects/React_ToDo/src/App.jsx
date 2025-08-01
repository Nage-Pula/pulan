import React, {useState, useEffect} from 'react';
import './App.css';
import TaskForm from './components/TaskForm.jsx';
import TaskColumn from './components/TaskColumn.jsx';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';


const oldTasks = localStorage.getItem('tasks');
const App = () => {
 const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);
 const [activeCard, setActiveCard] = useState(null);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
  }, [tasks]);

  // Function to handle task deletion
 const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    console.log(`${activeCard} Dragging ${status} task at position ${position}`);
    if (activeCard === null|| activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
   const updateTasks= tasks.filter((task, index) => index !== activeCard);
   updateTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    });
    setTasks(updateTasks);
  };

  return (
    <div className='app'>
    <TaskForm  setTasks={setTasks} />
      <main className='app_main'>
       <TaskColumn title='To Do' icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      <TaskColumn title='In Progress' icon={doingIcon} tasks={tasks} status='in-progress' handleDelete={handleDelete} setActiveCard={setActiveCard}  onDrop={onDrop}/>
        <TaskColumn title='Done' icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      </main>
      
    </div>
  )
}

export default App
