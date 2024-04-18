import mongoose from "mongoose";

const cachorroSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        name: {type: String, required: true},
        brand: {type: String},
        age: {type: Number},
        vacinnated: {type: Boolean},
    },
    {versionKey: false}
);

const dogs = mongoose.model("dogs",
dogsSchema);

export default dogs;