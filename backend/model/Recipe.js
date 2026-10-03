const mongoose = require("mongoose")
const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cookingtime: {
        type: Number,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }

},
    {
        timestamps: true
    }
)

const Recipe=mongoose.model("Recipe",recipeSchema)
module.exports=Recipe