import React, { useState } from 'react';
import Button from '../components/Button';
import List from './List';
import moment from 'moment';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addEntry } from '../redux/features/entries';

function Todo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const [newEntry, setNewEntry] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    newEntry.length > 0 ? dispatch(addEntry(newEntry)) : null;

    // clear input
    document.querySelector('#entry').value = '';
    setNewEntry('');
  };

  const handleChange = (event) => {
    setNewEntry(event.target.value);
  };

  return (
    <div className='h-4/6 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-2 grid gap-2 grid-rows-6 rounded-md shadow-lg border border-orange-400 dark:border-violet-500 bg-white dark:bg-neutral-900  relative'>
      <div className='absolute bottom-1 left-2'>
        <p className='text-orange-400 dark:text-violet-500 text-xs'>
          {moment(Date.now()).format('LL LT')}
        </p>
      </div>
      <div className='absolute bottom-1 right-2'>
        <p className='text-orange-400 dark:text-violet-500 text-xs'>
          {`${newEntry.length} / 40`}
        </p>
      </div>
      <div className='row-span-4 h-full w-full p-2 bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-violet-500 dark:to-pink-500 rounded-md'>
        <p className='text-white uppercase text-center text-3xl tracking-wide antialiased font-sans font-bold'>
          Todo List
        </p>
        <div className='overflow-scroll px-4 mt-4 h-4/5'>
          {todos.map((value, index) => {
            return (
              <List
                entry={value}
                firstIndex={index == 0 ? true : false}
                currentIndex={index}
                lastIndex={index == todos.length - 1 ? true : false}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <form autoComplete='off' className='row-span-2 h-full w-full p-5'>
        <h1 className='dark:text-white'>What do you want to do?</h1>
        <input
          id='entry'
          maxLength='40'
          className='dark:text-white my-3 w-full outline-none border-b border-orange-400 dark:border-violet-500 bg-transparent'
          type='text'
          onChange={handleChange}
        />
        <div className='flex justify-end'>
          <Button
            type='submit'
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
            onClick={addTodo}
          />
        </div>
      </form>
    </div>
  );
}

export default Todo;
