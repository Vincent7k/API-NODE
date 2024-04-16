import mongoose from "mongoose";

async function connectDataBase(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.x5djbhi.mongodb.net/dbSenacPetshop?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default connectDataBase;