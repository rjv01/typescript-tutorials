import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center m-4 p-4'>
      <h1 className='text-2xl text-red-500'>I, rjv01 welcomes you to my Small Project collection on</h1>
      <h1 className='text-2xl text-red-500'>TypeScript with Shadcn UI component library</h1>
      <div className='grid grid-cols-3 m-4 p-4'>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/testbutton">Counter</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/enteryourname">Enter Your Name</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/userstatus">User Profile</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/greet">Greet</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/person">Person</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/heros">Hero</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/status">Status</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/buttons">Buttons</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/inputs">Inputs</a>
      </div>
    </div>

  )
}

export default HomePage;