import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <>
      <div>
        <div className="min-h-screen p-6 bg-slate-800 text-white text-lg">
          <NavBar />
          <Outlet />
          {/*     <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/favorites" element={<PageFavorites />} />
          </Routes>*/}
        </div>
      </div>
    </>
  )
}

export default App
