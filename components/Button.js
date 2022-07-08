import React from 'react';

function Button({ icon, label, color, onClick, disabled, ...props }) {
  return (
    <button
      className={`flex p-2 rounded-md ${
        color
          ? color
          : disabled
          ? 'bg-neutral-700'
          : `bg-orange-400 dark:bg-violet-500`
      } capitalize text-white text-sm select-none`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon ? <span className='mr-1'>{icon}</span> : null}
      {label ? label : null}
    </button>
  );
}

export default Button;
