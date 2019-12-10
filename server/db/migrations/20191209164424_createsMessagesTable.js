exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", tbl => {
    tbl.increments();

    tbl.text("message").notNullable();

    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("room_id")
      .unsigned()
      .references("id")
      .inTable("channels")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("messages");
};
