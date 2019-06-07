exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Sprint1", description: "1st Sprint", completed: true },
        { name: "Sprint2", description: "2nd Sprint", completed: true },
        { name: "Sprint3", description: "3rd Sprint", completed: false }
      ]);
    });
};
