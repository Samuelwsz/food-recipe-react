import { Dispatch, FormEvent, SetStateAction } from "react"

export interface ContextProps {
  searchParam: string
  setSearchParam: Dispatch<SetStateAction<string>>
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  loading: boolean
  recipeList: RecipeListprops[]
  recipeDetailsData: RecipeDetailsData | null
  setRecipeDetailsData: Dispatch<SetStateAction<RecipeDetailsData | null>>
  favoriteList: RecipeListprops[]
  handleAddToFavorite: (getCurrentItem: RecipeDetailsData["recipe"]) => void
}

export interface RecipeListprops {
  image_url: string
  publisher: string
  title: string
  id: string
}

export interface RecipeDetailsData {
  recipe: {
    id: string
    title: string
    publisher: string
    image_url: string
    ingredients: Ingredient[]
  }
}

interface Ingredient {
  quantity: number
  unit: string
  description: string
}
