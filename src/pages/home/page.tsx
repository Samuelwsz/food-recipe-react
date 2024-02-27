import { useContext } from "react"
import { GlobalContext } from "../../context/context"
import { ContextProps } from "../../interfaces/interfaces"
import { RecipeItem } from "../../components/recipe-list"

export function PageHome() {
  const context = useContext(GlobalContext)

  const { loading, recipeList } = context as ContextProps

  if (loading)
    return <div className="flex justify-center">Loading...Please wait!</div>

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => (
          <RecipeItem
            key={item.id}
            id={item.id}
            image_url={item.image_url}
            publisher={item.publisher}
            title={item.title}
          />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-white font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  )
}
