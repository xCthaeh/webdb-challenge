const express = require("express");
const knex = require("knex");
const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);
const server = express();
const PORT = 8000;

server.use(express.json());

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
