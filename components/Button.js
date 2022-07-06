import React from 'react';

function Button({ icon, label, color, onClick }) {
  return (
    <button
      className={`flex p-2 rounded-md ${
        color ? color : `bg-sky-400 dark:bg-violet-500`
      } capitalize text-white text-sm`}
      onClick={onClick}
    >
      {icon ? <span className='mr-2'>{icon}</span> : null}
      {label ? label : null}
    </button>
  );
}

export default Button;
