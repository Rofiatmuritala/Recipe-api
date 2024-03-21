import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import RecipeRoute from "./routes/recipes.routes.js"

dotenv.config()
// create express app
const app= express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors())

const port = process.env.PORT || 6080

// make database connection
await mongoose.connect(process.env.MONGO_URI)

// use routes
app.use( RecipeRoute)


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
