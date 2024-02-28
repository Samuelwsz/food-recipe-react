import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import GlobalState from "./context/context"

function App() {
  return (
    <>
      <GlobalState>
        <div>
          <div className="min-h-screen p-6 bg-slate-800 text-white text-lg">
            <NavBar />
            <Outlet />
          </div>
        </div>
      </GlobalState>
    </>
  )
}

export default App
