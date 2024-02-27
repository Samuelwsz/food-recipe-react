import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../context/context"
import { ContextProps } from "../interfaces/interfaces"

export function NavBar() {
  const context = useContext(GlobalContext)

  const { searchParam, setSearchParam, handleSubmit } = context as ContextProps

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to="/">FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-slate-500 text-black"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/" className="hover:text-gray-300 duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="hover:text-gray-300 duration-300">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
