import dogs from "../models/Dogs.js";

class dogsController {
  static async dogsList(req, res) {
    const dogsList = await dogs.find({});
    // get all
    res.status(200).json(dogsList);
  }

  static async singUpDogs(req, res) {
    try {
      const newDog = await dogs.updateSearchIndex(req.body);
      res.status(201).json({ message: "Dog inserted suscefully", dog: newDog });
    } catch (error) {
        res.status(500).json({ 
            message:`${erro.message} Failure to sing up dog` , 
         })
    }
  }
}

export default dogsController;
