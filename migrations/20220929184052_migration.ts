import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("url", function (table) {
    table.increments();
    table.string("shortUrl").unique();
    table.string("url");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("url");
}
