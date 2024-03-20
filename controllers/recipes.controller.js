import {RecipeModel} from "../models/recipe.js";

export const getAllRecipe = (req,res) => {

    res.send("getting a recipe")
}

export const addRecipe = async (req,res) => {
//    add a recipe to the database
const createResult = await RecipeModel.create(req.body);
// return response
res.json(createResult);
}

export const getOneRecipe = (req,res) => {
    res.send("Get single recipe")
}

export const updateRecipe = (req, res) => {
    res.send(req.params.id)
}

export const deleteRecipe = (req,res) =>
{res.send (req.params.id)}