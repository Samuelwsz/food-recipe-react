import { FormEvent, ReactNode, createContext, useEffect, useState } from "react"
import {
  ContextProps,
  RecipeDetailsData,
  RecipeListprops,
} from "../interfaces/interfaces"
import { useNavigate } from "react-router-dom"

export const GlobalContext = createContext<ContextProps | null>(null)

export default function GlobalState({ children }: { children: ReactNode }) {
  const [searchParam, setSearchParam] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [recipeList, setRecipeList] = useState([])
  const [recipeDetailsData, setRecipeDetailsData] =
    useState<RecipeDetailsData | null>(null)
  const [favoriteList, setFavoriteList] = useState<RecipeListprops[]>([])

  const navigate = useNavigate()

  // Função para salvar e carregar os favoritos do localStorage
  const updateFavoritesFromLocalStorage = () => {
    const favoritesFromStorage = localStorage.getItem("favorites")
    if (favoritesFromStorage) {
      setFavoriteList(JSON.parse(favoritesFromStorage))
    }
  }

  // Carregar os favoritos do localStorage na inicialização da aplicação
  useEffect(() => {
    updateFavoritesFromLocalStorage()
  }, [])

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
        navigate("/")
      }
    } catch (error) {
      setLoading(false)
      setSearchParam("")
      console.log(error)
    }
  }

  function handleAddToFavorite(getCurrentItem: RecipeListprops) {
    const cpyFavoriteList = [...favoriteList]
    const index = cpyFavoriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    )

    if (index === -1) {
      cpyFavoriteList.push(getCurrentItem)
    } else {
      cpyFavoriteList.splice(index)
    }

    setFavoriteList(cpyFavoriteList)
    // Salvar os favoritos no localStorage após atualizar o estado
    localStorage.setItem("favorites", JSON.stringify(cpyFavoriteList))
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
