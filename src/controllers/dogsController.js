import dogs from "../models/Dogs.js";

class dogsController {
    static async dogsList(req, res) {
        const dogsList = await dogs.find({})
        // get all
         res.status(200).json(dogsList)
     };
}

export default dogsController;