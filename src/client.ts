export {};
const { Client } = require("pg");
const log = require("./utilities/logger");

const options = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const connection = new Client(options);

connection.on("error", (err: any, client: any) => {
  log.error({ category: "DB", msg: err.message });
});

module.exports = connection;
