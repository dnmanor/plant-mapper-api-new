export {};
import {
  getAllPlants,
  getPlantsByCatergory,
  searchPlantByName,
} from "../database/plant";

module.exports = function (app: any) {
  app.get("/plants", async (req, res) => {
    try {
      const plants = await getAllPlants();
      res.status(200).send(plants);
    } catch (error) {
      res.status(400).send({ error });
    }
  });
};
