export {};
const client = require("../client");
const log = require("../utilities/logger");

export default async function getAllPlants() {
  await client.connect();

  try {
    const response = await client.query({ text: `SELECT * FROM plants` });
    if (!response) {
      throw new Error("Could not fetch plants");
    }
    return response.rows;
  } catch (error) {
    log.error({ category: "BD", msg: error });
  }
}
