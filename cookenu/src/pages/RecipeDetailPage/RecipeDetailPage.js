import { Typography } from "@material-ui/core";
import React from "react"
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constans/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeContainer, RecipeImage, ScreenContainer } from "./styled";

const RecipeDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  const recipe = useRequestData({}, `${BASE_URL}/recipe/${params.id}`)[0]

  return (
    <ScreenContainer>
      {recipe ?
      <RecipeContainer>
      <RecipeImage src={recipe.image}/>
      <Typography gutterBottom align={"center"} variant={"h5"} color={"primary"}>{recipe.title}</Typography>
      <Typography aling={"center"}>{recipe.description}</Typography>

    </RecipeContainer>
    :
    <Loading/>
      }
    </ScreenContainer>
  );
}

export default RecipeDetailPage