import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "@/context/context"
import { ContextProps } from "@/interfaces/interfaces"
import { Button } from "@/components/ui/button"

export function Details() {
  const { id } = useParams()

  const context = useContext(GlobalContext)

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoriteList,
  } = context as ContextProps

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      )

      const data = await response.json()

      console.log(data)
      if (data?.data) {
        setRecipeDetailsData(data?.data)
      }
    }

    getRecipeDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-500 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate ">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <Button
            onClick={() =>
              recipeDetailsData?.recipe &&
              handleAddToFavorite(recipeDetailsData?.recipe)
            }
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md"
          >
            {favoriteList &&
            favoriteList.length > 0 &&
            favoriteList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </Button>
        </div>
        <div>
          <span className="text-2xl font-semibold">Ingredients:</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-2xl font-semibold">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
