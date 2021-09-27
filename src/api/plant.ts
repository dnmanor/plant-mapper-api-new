export {};
const client = require("../client");
const log = require("../utilities/logger");

export async function getAllPlants() {
  await client.connect();

  try {
    const response = await client.query({ text: `SELECT * FROM plants` });
    if (response.rows.length === 0) {
      throw new Error("Could not fetch plants");
    }
    return response.rows;
  } catch (error) {
    log.error({ category: "BD", msg: error });
  } finally {
    await client.close();
  }
}

export async function getPlantsByCatergory(category: string) {
  await client.connect();
  try {
    const response = await client.query({
      text: `SELECT * from plants WHERE category=$1`,
      values: [category],
    });
    if (response.rows.length === 0) {
      throw new Error("Could not fetch plants");
    }
    return response.rows;
  } catch (error) {
    log.error({ category: "BD", msg: error });
  } finally {
    await client.close();
  }
}
