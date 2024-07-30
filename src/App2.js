import React, { useState } from 'react';
import "./components/header.css"
import "./components/form.css"

export function App2() {
const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (isEditing) {
        // Update the existing todo
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? inputValue : todo
        );
        setTodos(updatedTodos);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // Add a new todo
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const startEditing = index => {
    setIsEditing(true);
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  const deleteTodo = index => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='header'>Todo App</div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='todo'>Todo: </label>
          <input
            type='text'
            id='todo'
            name='todo'
            value={inputValue}
            onChange={handleInputChange}
          />
          <input
            type='submit'
            value={isEditing ? 'Save Changes' : 'Add to the list'}
          />
        </form>

        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}  
              <button onClick={() => startEditing(index)}> Edit </button>
              <button onClick={() => deleteTodo(index)}> Delete </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}