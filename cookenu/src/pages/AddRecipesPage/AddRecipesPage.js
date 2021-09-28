import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import Typography from '@material-ui/core/Typography'
import AddRecipesForm from "./addRecipesForm";
import { RecipeContainer, ScreenContainer } from "./styled";

const AddRecipesPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={"h4"} aling={"cneter"} color={"textPrimary"}>Adicionar Receita</Typography>
        <AddRecipesForm/>
      </RecipeContainer>
    </ScreenContainer>
  );
}

export default AddRecipesPage