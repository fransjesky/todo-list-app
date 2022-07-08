import React, { useState } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { removeEntry } from '../redux/features/entries';

function List({ entry, firstIndex, currentIndex, lastIndex }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const formattedEntry = entry.charAt(0).toUpperCase() + entry.slice(1);

  const handleChecked = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleRemoveEntry = () => {
    dispatch(removeEntry(currentIndex));
  };

  return (
    <div
      className={`flex justify-between ${
        firstIndex ? 'pb-4' : lastIndex ? 'pt-4' : 'py-4'
      } ${lastIndex ? null : 'border-b'} border-white`}
    >
      <p
        className={`cursor-default w-3/4 font-medium font-sans ${
          checked ? 'line-through decoration-1 text-neutral-400' : 'text-white'
        } select-none`}
      >
        {formattedEntry}
      </p>
      <div className='text-white cursor-pointer flex'>
        {checked ? (
          <div
            className='mr-2 h-7 w-7 flex justify-center items-center bg-white rounded-full cursor-pointer'
            onClick={handleChecked}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 select-none text-orange-400 dark:text-violet-500 transition-all ease-linear hover:text-sky-400 dark:hover:text-sky-400 hover:scale-125'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        ) : (
          <div
            className='mr-2 h-7 w-7 flex justify-center items-center bg-white rounded-full cursor-pointer'
            onClick={handleChecked}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 select-none text-orange-400 dark:text-violet-500 transition-all ease-linear hover:text-green-400 dark:hover:text-green-400 hover:scale-125'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        )}
        <div
          className='h-7 w-7 flex justify-center items-center bg-white rounded-full'
          onClick={handleRemoveEntry}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 select-none text-orange-400 dark:text-violet-500 transition-all ease-linear hover:text-pink-500 dark:hover:text-pink-500 hover:scale-125'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default List;
