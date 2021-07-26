import React, { useState } from 'react';
const NewTaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Pontos Arrecadação"
          placeholder="Digite a região dos Pontos de Arrecadação"
          onChange={setNewTask}
        />
        <button type="submit">
          Buscar
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;