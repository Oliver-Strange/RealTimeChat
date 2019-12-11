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

    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("message_room_id")
      .unsigned()
      .references("room_id")
      .inTable("messages")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("channels");
};
