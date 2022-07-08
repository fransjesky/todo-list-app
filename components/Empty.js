import React from 'react';

function Empty() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center text-white'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-20 w-20'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <p className='mt-4 text-center'>
        Todo list is empty.
        <br />
        Please add your schedule below
      </p>
    </div>
  );
}

export default Empty;
