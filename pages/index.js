import Head from 'next/head';

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Head>
        <title>To-Do App</title>
        <meta
          name='description'
          content='A simple to-do list app created by Frans Jesky. Built with Next.js and Tailwind'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='my-2.5'>
        <h1 className='text-2xl font-bold'>Simple To-Do List App</h1>
        <span>status - work in progress</span>
      </div>
      <div className='h-4/6 w-3/12 bg-sky-400 drop-shadow-md rounded-md'></div>
    </div>
  );
}
