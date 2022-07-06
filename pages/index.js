import Head from 'next/head';
// import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Todo from '../containers/todo';

export default function Home() {
  // const Todo = dynamic(() => import('../containers/Todo'), { ssr: false });
  return (
    <div className='h-screen flex flex-col items-center justify-center relative dark:bg-neutral-900'>
      <Head>
        <title>To-Do App</title>
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
