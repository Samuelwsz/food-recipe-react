import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import GlobalState from "./context/context"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <GlobalState>
          <div>
            <div className="flex justify-center pt-5">
              <ModeToggle />
            </div>
            <div className="min-h-screen p-6 text-lg">
              <NavBar />
              <Outlet />
            </div>
          </div>
        </GlobalState>
      </ThemeProvider>
    </>
  )
}

export default App
