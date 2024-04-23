import dogs from "../models/Dogs.js";

class DogsController {
  static async listDogs(req, res) {
    const dogsList = await dogs.find({});
    // get all
    res.status(200).json(dogsList);
  }

  static async listDogsbyId(req, res) {
    try {
      const id = req.params.id;
      const dogFound = await dog.findById(id);
      res.status(200).json(dogFound);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} Couldn't find the search dog`,
      });
    }
  }

  static async deleteDogsById(req, res){
    try {
      const id = req.params.id;
      const dogDeleted = await dogs.findByIdAndDelete(id);
      res.status(200).json(dogDeleted);
    } catch (erro) { 
      res.status(500).json({
        message: `${erro.message} Dog deleted`,
      });

    }
  }

  static async singUpDogs(req, res) {
    try {
      const newDog = await dogs.create(req.body);
      res.status(201).json({ message: "Dog inserted suscefully", dog: newDog });
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} Failure to sing up dog`,
      });
    }
  }

  static async updateDogs(req, res) {
    try {
      const id = req.params.id;
      await dogs.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Up to date Dog" });
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} Failure to sing up dog`,
      });
    }
  }
}

export default DogsController;
