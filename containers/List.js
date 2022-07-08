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
        firstIndex ? 'mb-2' : lastIndex ? 'mt-2' : 'my-2'
      } py-2 ${lastIndex ? null : 'border-b'} border-white`}
    >
      <p
        className={`cursor-default ${
          checked ? 'line-through decoration-2 text-teal-400' : 'text-white'
        }`}
      >
        {formattedEntry}
      </p>
      <div className='text-white cursor-pointer flex'>
        {checked ? (
          <div
            className='mr-2 cursor-pointer text-teal-400'
            onClick={handleChecked}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
              />
            </svg>
          </div>
        ) : (
          <div className='mr-2 cursor-pointer' onClick={handleChecked}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
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
        <div onClick={handleRemoveEntry}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
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
