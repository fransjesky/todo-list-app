import React, { useState, useEffect } from 'react';
import Button from './Button';

// redux
import { useDispatch } from 'react-redux';
import { switchDarkTheme, switchLightTheme } from '../redux/features/theme';

function Header() {
  const icons = {
    darkMode: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
      </svg>
    ),
    lightMode: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
        />
      </svg>
    ),
  };

  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useState(true);
  const handleMode = () => {
    darkMode ? dispatch(switchLightTheme()) : dispatch(switchDarkTheme());
    darkMode ? setDarkMode(false) : setDarkMode(true);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className='fixed flex justify-between items-center top-0 h-20 px-4 w-full'>
      <div className='flex flex-col'>
        <p className='m-0 dark:text-white select-none'>Simple Todo App</p>
        <span className='font-sans text-xs text-gray-400 select-none'>
          ver 0.5
        </span>
      </div>
      {darkMode ? (
        <Button
          label='light mode'
          color='bg-orange-400'
          icon={icons.lightMode}
          onClick={handleMode}
        />
      ) : (
        <Button
          label='dark mode'
          color='bg-violet-500'
          icon={icons.darkMode}
          onClick={handleMode}
        />
      )}
    </div>
  );
}

export default Header;
