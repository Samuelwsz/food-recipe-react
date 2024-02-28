import { useContext } from "react"
import { GlobalContext } from "../../context/context"
import { RecipeItem } from "../../components/recipe-list"
import { ContextProps } from "../../interfaces/interfaces"

export function PageFavorites() {
  const context = useContext(GlobalContext)

  const { favoriteList } = context as ContextProps

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => (
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
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  )
}
