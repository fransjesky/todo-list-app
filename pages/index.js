import Head from 'next/head';
import Header from '../components/Header';
import Todo from '../containers/Todo';

// redux
import { useSelector } from 'react-redux';

// styles module
import styles from '../styles/Home.module.css';

export default function Home() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center relative dark:bg-neutral-900 ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <Head>
        <title>Todo App</title>
        <meta
          name='description'
          content='A simple to-do list app created by Frans Jesky. Built with Next.js and Tailwind'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Todo />
    </div>
  );
}
