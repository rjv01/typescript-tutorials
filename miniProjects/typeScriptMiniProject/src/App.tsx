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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-svh flex flex-col items-center bg-background text-foreground">
        <Header />
        <LoggedinProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/testbutton" element={
            // <TestButton onClick={()=>alert("Button CLicked")} text="Click Me" />
            <TestButton text="Increase" />
            // <TestButton text="Decrease" />
          } />
          <Route path="/enteryourname" element={<EnterYourName />} />
            <Route path="/userstatus" element={<UserStatus />} />
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