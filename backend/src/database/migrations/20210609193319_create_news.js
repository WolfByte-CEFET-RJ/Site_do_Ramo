exports.up = knex => {
  return knex.schema.createTable("news", (table) => {
    table.uuid("id");
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.text("image").notNullable();
    table.timestamps(true, true);
    table.uuid("user_id").references("id").inTable("users").onDelete("SET NULL");
  });
};

exports.down = knex => knex.schema.dropTable("news");
