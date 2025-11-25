import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx"
import HomePage from "./pages/Home/HomePage.tsx";
import Header from "./pages/Navbar/Header.tsx";
import FooterPage from "./pages/Footer/FooterPage.tsx";
import Stopwatch from "./pages/Stopwatch.tsx";
import TestButton from "./components/TestButton.tsx";
import EnterYourName from "./components/EnterYourName.tsx";
import { UserStatus } from "./components/UserStatus.tsx";
import { LoggedinProvider } from "./provider/Loggedin.tsx";
import { Greet } from "./components/Greet.tsx";
import { Person } from "./components/Person.tsx";
import { Hero } from "./components/Hero.tsx";
import Status from "./components/Status.tsx";
import Buttons from "./components/Buttons.tsx";

function App() {
  const personName = {
    first: 'rjv',
    last: '01'
  }
  const heroList = [
    {
      first:'Peter Parker',
      last:'Spiderman'
    },
    {
      first:'Bruce Wayne',
      last:'Batman'
    },
    {
      first:'Clark Kent',
      last:'Superman'
    },
    {
      first:'Steve Rogers',
      last:'Captain America'
    },
    {
      first:'Logan',
      last:'Wolverine'
    }
    ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-svh flex flex-col items-center bg-background text-foreground">
        <Header />
        <LoggedinProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/greet" element={<Greet name = "raj" messageCount={10} />} />
          <Route path="/person" element={<Person name = { personName } messageCount={111}/>} />
          <Route path="/heros" element={<Hero names = { heroList } />} />
          <Route path="/testbutton" element={
            // <TestButton onClick={()=>alert("Button CLicked")} text="Click Me" />
            <TestButton text="Increase" />
            // <TestButton text="Decrease" />
          } />
          <Route path="/enteryourname" element={<EnterYourName />} />
          <Route path="/userstatus" element={<UserStatus />} />
          <Route path="/status" element={<Status status = 'success'/>} />
          <Route path="/buttons" element={<Buttons handleClick={(event)=>(console.log("event: ",event))}/>} />
        </Routes>
        {/* <TestButton text="Increase" />
        <TestButton text="Decrease" /> */}
        {/* <TestButton onClick={()=>alert("Button CLicked")} text="Click Me" /> */}
        <FooterPage />
        </LoggedinProvider>
      </div>
    </ThemeProvider>
  )
}

export default App