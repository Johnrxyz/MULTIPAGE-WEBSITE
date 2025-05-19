import React, { useState } from 'react';

const Dropdown = () => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '100%' }}>
        {selected || 'Select an option'}
      </button>
      {isOpen && (
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: '0.5rem',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          position: 'absolute',
          width: '100%',
          zIndex: 1,
        }}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
