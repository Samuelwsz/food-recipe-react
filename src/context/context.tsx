import { FormEvent, ReactNode, createContext, useState } from "react"
import { ContextProps } from "../interfaces/interfaces"

export const GlobalContext = createContext<ContextProps | null>(null)

export default function GlobalState({ children }: { children: ReactNode }) {
  const [searchParam, setSearchParam] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [recipeList, setRecipeList] = useState([])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setLoading(true)

      const res = await fetch(
        ` https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      )

      const data = await res.json()

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam("")
      }
    } catch (error) {
      setLoading(false)
      setSearchParam("")
      console.log(error)
    }
  }

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
