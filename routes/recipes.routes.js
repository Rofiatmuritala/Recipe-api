import express, { Router } from "express"
import { addRecipe, deleteRecipe, getAllRecipe, getOneRecipe, updateRecipe } from "../controllers/recipes.controller.js"


const route = Router()

route.get( '/recipes', getAllRecipe )

route.post("/recipes", addRecipe)

route.get("/recipes/:id", getOneRecipe)

route.patch("/recipes/:id", updateRecipe )

route.delete("/recipes/:id", deleteRecipe )

export default route;