import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Adicione uma tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
