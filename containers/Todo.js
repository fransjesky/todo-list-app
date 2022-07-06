import React from 'react';
import Button from '../components/Button';
import moment from 'moment';

function Todo() {
  return (
    <div className='h-4/6 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-2 grid gap-2 grid-rows-6 rounded-md shadow-lg border border-orange-400 dark:border-violet-500 relative'>
      <div className='absolute -top-6 left-0'>
        <p className='text-orange-400 dark:text-violet-500 text-xs'>
          Today's Date - {moment(Date.now()).format('LL')}
        </p>
      </div>
      <div className='absolute -top-6 right-0'>
        <p className='text-orange-400 dark:text-violet-500 text-xs'>
          {moment(Date.now()).format('LT')}
        </p>
      </div>
      <div className='row-span-4 h-full w-full p-5 bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-violet-500 dark:to-pink-500 rounded-md'>
        <p className='text-white uppercase text-center text-3xl tracking-wide antialiased font-sans font-bold'>
          Todo List
        </p>
      </div>
      <div className='row-span-2 h-full w-full p-5'>
        <h1 className='dark:text-white'>What do you want to do?</h1>
        <input
          className='dark:text-white my-3 w-full outline-none border-b border-orange-400 dark:border-violet-500 bg-transparent'
          type='text'
        />
        <div className='flex justify-end'>
          <Button
            label='add todo'
            icon={
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
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
