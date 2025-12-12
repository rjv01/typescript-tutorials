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
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/stylepropss">Style props</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/loggedin">LoggedIn</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/users">Users</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/box">Box</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/timer">Timer</a>
        <a className='text-blue-400 hover:text-white hover:bg-linear-to-b from-red-500 via-purple-500 to-blue-500 w-full text-xl p-3 m-2 border duration-200' href="/cinema">Cinematography</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/texteditor">Text Editor</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' href="/cards">Cards</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' 
        href="/paginationpage">Pagination Page</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' 
        href="/usercards">User Cards</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' 
        href="/shadcncalendar">ShadCn Calendar</a>
        <a className='text-blue-400 hover:text-blue-900 text-xl p-3 m-2 border' 
        href="/responsivepage">Responsive Pager</a>
      </div>
    </div>

  )
}

export default HomePage;