import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center m-4 p-4'>
      <h1 className='text-2xl text-red-500'>I, Rjv01 welcomes you to my Small Project collection on</h1>
      <h1 className='text-2xl text-red-500'>TypeScript with Shadcn UI component library</h1>
      <div className='grid grid-cols-3 m-4 p-4'>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
      </div>
    </div>

  )
}

export default HomePage;