import React, { useState, useEffect } from 'react';
import Button from './Button';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  initTheme,
  switchDarkTheme,
  switchLightTheme,
} from '../redux/features/theme';

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
  const { darkMode } = useSelector((state) => state.theme);
  const [darkModeSwitch, setDarkModeSwitch] = useState(true);

  const handleMode = () => {
    darkMode ? dispatch(switchLightTheme()) : dispatch(switchDarkTheme());
    darkMode
      ? localStorage.setItem('darkMode', false)
      : localStorage.setItem('darkMode', true);
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') == 'true') {
      console.log('1');
      dispatch(initTheme(true));
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('darkMode') == 'false') {
      console.log('2');
      dispatch(initTheme(false));
      document.documentElement.classList.remove('dark');
    } else {
      console.log('3');
      dispatch(initTheme(darkModeSwitch));
      localStorage.setItem('darkMode', darkModeSwitch);

      darkModeSwitch
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // init dark class on html based on state
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className='fixed flex justify-between items-center top-0 h-20 px-4 w-full'>
      <div className='flex flex-col'>
        <p className='m-0 dark:text-white select-none'>Simple Todo App</p>
        <span className='font-sans text-xs text-gray-400 select-none'>
          ver 0.6
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
