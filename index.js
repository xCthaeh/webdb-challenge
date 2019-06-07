const express = require("express");
const knex = require("knex");
const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);
const server = express();
const PORT = 8000;

server.use(express.json());

server.use(express.json());

server.get("/api/projects/:id", (req, res) => {
  db("projects")
    .where("id", id)
    .then(project => {
      if (!project) {
        res.status(404).json({
          message: "Couldn't retrieve this project from the Database."
        });
      }
      db("actions")
        .where("project_id", id)
        .then(actions => {
          project[0].actions = actions;
          res.status(200).json(project);
        })
        .catch(err => {
          res.status(500).json({
            message: "Couldn't retrieve this project from the Database."
          });
        });
    });
});

server.post("/api/projects", (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };
  if (!project) {
    res.status(400).json({ message: "Required field not filled." });
  }
  db.insert(project)
    .into("projects")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error adding this project to the database." });
    });
});

server.post("/api/actions", (req, res) => {});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
