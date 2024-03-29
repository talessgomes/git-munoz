import React from "react"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeListContainer, AddRecipeButton } from './styled'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constans/urls'
import { Add } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { goToAddRecipes, goToRecipeDetail } from '../../routes/coordinator'
import Loading from "../../components/Loading/Loading"

const RecipesListPage = () => {
  useProtectedPage()
  const history = useHistory()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetail(history,id)
  }

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })

  return (
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Loading/>}
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddRecipes(history)}
      >
        <Add />
      </AddRecipeButton>
    </RecipeListContainer>
  )
}

export default RecipesListPage