import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center m-4 p-4'>
      <h1 className='text-2xl text-red-500 font-mono'>I, rjv01 welcomes you to my Small Project collection on</h1>
      <h1 className='text-2xl text-red-500 font-mono'>TypeScript with Shadcn UI component library</h1>
      <div className='grid sm:grid-cols-3 m-4 p-4 sm:gap-8 gap-6'>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/stopwatch">StopWatch</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/testbutton">Counter</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/enteryourname">Enter Your Name</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/userstatus">User Profile</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/greet">Greet</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/person">Person</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/heros">Hero</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/status">Status</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/buttons">Buttons</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/inputs">Inputs</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/stylepropss">Style props</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/loggedin">LoggedIn</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/users">Users</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/box">Box</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/timer">Timer</a>
        <a className='text-blue-400 hover:text-white hover:bg-linear-to-r from-yellow-500 via-orange-500 to-yellow-500 w-full text-xl duration-200 p-3 m-2 rounded-lg' href="/cinema">Cinematography</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/texteditor">Text Editor</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' href="/cards">Cards</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' 
        href="/paginationpage">Pagination Page</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' 
        href="/usercards">User Cards</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' 
        href="/shadcncalendar">ShadCn Calendar</a>
        <a className='text-blue-400 border-blue-500 bg-blue-500/20 text-center hover:text-blue-700 hover:bg-blue-500/30 text-xl duration-200 p-3 m-2 border rounded-lg' 
        href="/responsivepage">Responsive Pager</a>
      </div>
    </div>

  )
}

export default HomePage;