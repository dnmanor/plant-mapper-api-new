export {};
import {
  getAllPlants,
  getPlantsByCatergory,
  searchPlantByName,
} from "../database/plant";

module.exports = function (app: any) {
  app.get(
    "/plants",
    async (
      req: any,
      res: {
        status: (arg0: number) => {
          (): any;
          new (): any;
          send: { (arg0: { error: unknown }): void; new (): any };
        };
      }
    ) => {
      try {
        const plants = await getAllPlants();
        res.status(200).send(plants);
      } catch (error) {
        res.status(400).send({ error });
      }
    }
  );
};
