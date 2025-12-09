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
import Inputs from "./components/Inputs.tsx";
import StypePropss from "./components/StypePropss.tsx";
import LoggedIn from "./components/LoggedIn.tsx";
import User from "./components/User.tsx";
import { ThemeContextProvider } from "./components/context/ThemeContext.tsx";
import Box from "./components/context/Box.tsx";
import MutableDom from "./components/Ref/MutableDom.tsx";
import Cinema from "./components/Cinema.tsx";
import Callback from "./pages/Callback";
import TextEditor from "./components/TextEditor.tsx";
import Cards from "./components/Cards.tsx";

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
          <Route path="/inputs" element={<Inputs value='name'/>} />
          <Route path="/stylepropss" element={
            <StypePropss 
            styles = { { 
                border:'1px solid grey',
                borderRadius:'15px',
                padding:'1rem',
                fontSize:'80px',
                color:"red",
                margin:'10px',
              }}
              onClick={()=>alert("kessa hai bhai?")}
              />} 
          />
        <Route path="/loggedin" element={<LoggedIn />} />
        <Route path="/users" element={<User />} />
        <Route 
          path="/box" 
          element={
            <ThemeContextProvider>
              <Box />
            </ThemeContextProvider>
          } />
        <Route path="/timer" element={<MutableDom />}/>
        <Route path="/cinema" element={<Cinema />}/>
        <Route path="/callback" element={<Callback />} />
        <Route path="/texteditor" element={<TextEditor />} />
        <Route path="/cards" element={<Cards />} />
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