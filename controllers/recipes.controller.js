import {RecipeModel} from "../models/recipe.js";

export const getAllRecipe = async (req,res,next) => {
try {
    // Get all recipes from database
    const findResult = await RecipeModel.find({})
    res.json({Data: findResult})
} catch (error) {
    next(error)
}
    
}

export const addRecipe = async (req,res,next) => {
try {
    //    add a recipe to the database
   
    const createResult = await RecipeModel.create({
        ...req.body,
        image: req.file.originalname
    });
    // return response
    res.status(201).json({Data: createResult});
} catch (error) {
    // forward to error express handler
    next(error);
}
}

export const getOneRecipe = async (req,res, next) => {
try {
    const getOneRecipe = await RecipeModel.findById(req.params.id)
    
    // Return 404 if recipe not found
    if (getOneRecipe===null) {
       return res.status(404).json({
            message: `Recipe with objectId: ${req.params.id} Not Found!`
        });
    }
    // Return response
    res.status(200).json({Data: getOneRecipe})
        // res.json("getting a recipe")
} catch (error) {
    next(error)
}
}



export const updateRecipe = (req, res) => {
    res.send(req.params.id)
}

export const deleteRecipe = (req,res) =>
{res.send (req.params.id)}