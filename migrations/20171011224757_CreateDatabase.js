exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('chats', function (table) {
      table.increments();
      table.string('account');
      table.string('name');
      table.text('content');
      table.string('ip_address');
      table.integer('server_id').defaultTo(0);
      table.boolean('status').defaultTo(true);
      table.integer('permission').defaultTo(0);
      table.timestamps();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('chats')
};
