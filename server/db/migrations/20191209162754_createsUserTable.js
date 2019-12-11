exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl
      .string("username", 12)
      .notNullable()
      .unique();

    tbl.string("password", 16).notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
