import React from 'react';

const ListPointsFilter = ({ onChange, onDelete, value }) => {
  return (
    <div className="ListPoints-container">
      <input
        className="ListPoints-field"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListPointsFilter;