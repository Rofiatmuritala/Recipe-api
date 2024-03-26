import express, { Router } from "express"
import multer from "multer"
import { addRecipe, deleteRecipe, getAllRecipe, getOneRecipe, updateRecipe } from "../controllers/recipes.controller.js"

// configure upload middleware
const upload = multer({dest: "uploads/images"})


// create recipe router
const route = Router()

route.get( '/recipes', getAllRecipe )

route.post("/recipes" , upload.single('image'), addRecipe)

route.get("/recipes/:id", getOneRecipe)

route.patch("/recipes/:id", updateRecipe )

route.delete("/recipes/:id", deleteRecipe )

export default route;