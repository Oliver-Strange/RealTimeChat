exports.up = function(knex, Promise) {
  return knex.schema.createTable("channels", tbl => {
    tbl.increments();

    tbl
      .string("name", 32)
      .notNullable()
      .unique();

    tbl
      .boolean("public")
      .notNullable()
      .defaultTo(true);

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("channels");
};
