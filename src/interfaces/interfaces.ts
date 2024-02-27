import { Dispatch, FormEvent, SetStateAction } from "react"

export interface ContextProps {
  searchParam: string
  setSearchParam: Dispatch<SetStateAction<string>>
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  loading: boolean
  recipeList: RecipeListprops[]
}

export interface RecipeListprops {
  image_url: string
  publisher: string
  title: string
  id: string
}
