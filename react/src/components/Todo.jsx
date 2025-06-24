import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    const { data } = await axios.get('http://localhost:3000/todo/');
    setTodo(data);
  };

  useEffect(() => { fetchTodo(); }, []);

  const addTodo = async () => {
    if (!task.trim()) return;
    await axios.post('http://localhost:3000/todo', { task });
    setTask('');
    fetchTodo();
  };

  const deleteTodo = async id => {
    await axios.delete(`http://localhost:3000/todo/${id}`);
    fetchTodo();
  };
  const updateTodo = async (id, oldTask) => {
    const updatedTask = prompt('Update task:', oldTask);
    if (updatedTask) {
      await axios.put(`http://localhost:3000/todo/${id}`, { task: updatedTask });
      fetchTodo();
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter the task"
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map(item => (
          <li key={item._id}>
            {item.task}
            <button onClick={() => deleteTodo(item._id)}>Delete</button>
            <button onClick={() => updateTodo(item._id, item.task)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;