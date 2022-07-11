import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import List from '../components/List';
import Empty from '../components/Empty';
import moment from 'moment';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getInit, addEntry, clearEntries } from '../redux/features/entries';

function Todo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    // create a local storage if there is no existing storage
    localStorage.getItem('todos')
      ? null
      : localStorage.setItem('todos', JSON.stringify(todos));

    const fetchStorage = JSON.parse(localStorage.getItem('todos'));
    if (localStorage.getItem('todos')) {
      dispatch(getInit(fetchStorage));
    }
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    // save new entry to redux
    const entryPayload = {
      id: Date.now(),
      entry: newEntry,
      completed: false,
    };
    dispatch(addEntry(entryPayload));

    // save new entry to local storage
    localStorage.setItem(
      'todos',
      todos.length > 0
        ? JSON.stringify([...todos, entryPayload])
        : JSON.stringify([entryPayload])
    );

    // clear input
    document.querySelector('#entry').value = '';
    setNewEntry('');
  };

  const clearTodo = () => {
    dispatch(clearEntries());

    // reset the storage
    localStorage.setItem('todos', JSON.stringify([]));
  };

  const handleChange = (event) => {
    setNewEntry(event.target.value);
  };

  return (
    <div className='h-4/6 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-2 grid gap-2 grid-rows-6 rounded-md shadow-lg border border-orange-400 dark:border-violet-500 bg-white dark:bg-neutral-900  relative'>
      <div className='row-span-4 h-full w-full p-2 bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-violet-500 dark:to-pink-500 rounded-md'>
        <p className='text-white uppercase text-center text-3xl tracking-wide antialiased font-sans font-bold select-none'>
          {moment(Date.now()).format('ddd, D MMMM')}
        </p>
        <div className='overflow-scroll px-4 mt-4 h-4/5'>
          {todos?.length > 0 ? (
            todos.map((value, index) => {
              return (
                <List
                  id={value.id}
                  entry={value.entry}
                  completed={value.completed}
                  firstIndex={index == 0 ? true : false}
                  currentIndex={index}
                  lastIndex={index == todos.length - 1 ? true : false}
                  key={index}
                />
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
      <form
        autoComplete='off'
        className='row-span-2 h-full w-full sm:p-2 xl:p-5 flex flex-col justify-center relative'
      >
        <div className='flex flex-col justify-between items-start xl:flex-row xl:items-center'>
          <h1 className='dark:text-white select-none'>
            What do you want to do?
          </h1>
          <p className='text-orange-400 dark:text-violet-500 text-xs select-none'>
            {`${newEntry.length} / 40 (minimum 4 characters)`}
          </p>
        </div>
        <input
          id='entry'
          maxLength='40'
          className='dark:text-white my-3 w-full outline-none border-b border-orange-400 dark:border-violet-500 bg-transparent'
          type='text'
          onChange={handleChange}
        />
        <div className='flex justify-center'>
          <div className='mx-2'>
            <Button
              disabled={todos.length <= 0 ? true : false}
              type='button'
              label='clear list'
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
                    d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              }
              onClick={clearTodo}
            />
          </div>
          <div className='mx-2'>
            <Button
              disabled={newEntry.length <= 3 ? true : false}
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
        </div>
      </form>
    </div>
  );
}

export default Todo;
