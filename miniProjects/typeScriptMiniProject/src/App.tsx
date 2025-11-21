import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx"
import HomePage from "./pages/Home/HomePage.tsx";
import Header from "./pages/Navbar/Header.tsx";
import FooterPage from "./pages/Footer/FooterPage.tsx";
import Stopwatch from "./pages/Stopwatch.tsx";
import TestButton from "./components/TestButton.tsx";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-svh flex flex-col items-center bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
        <TestButton text="Click Me" />
        <TestButton onclick={()=>alert("Button CLicked")} text="Click Me" />
        <FooterPage />
      </div>
    </ThemeProvider>
  )
}

export default App