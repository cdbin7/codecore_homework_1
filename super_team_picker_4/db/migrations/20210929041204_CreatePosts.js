
exports.up = function(knex) {
  return knex.schema.createTable("cohorts", table => {
    table.increments("id");
    table.text("name");
    table.text("member");
    table.text("logoUrl")
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("cohorts")};
