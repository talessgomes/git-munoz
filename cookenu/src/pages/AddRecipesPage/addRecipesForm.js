import React, { useState } from "react"
import { Button, TextField } from "@material-ui/core";
import { AddRecipeFormContainer, InputsContainer } from "./styled";
import useForm from "../../hooks/useForm"
import {createRecipe}  from "../../services/recipe";
import { CircularProgress } from "@material-ui/core";

const AddRecipesForm = () => {
    const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                <TextField
                name={"title"}
                value={form.title}
                onChange={onChange}
                label={"Título"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
                />
                <TextField
                name={"description"}
                value={form.description}
                onChange={onChange}
                label={"Descrição"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
                />
                <TextField
                name={"image"}
                value={form.image}
                onChange={onChange}
                label={"Imagem"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
                />
                </InputsContainer>
                <Button
        type="submit"
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}    
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Receita</>}
        </Button>
            </AddRecipeFormContainer>
        </form>
    )
}
export default AddRecipesForm;