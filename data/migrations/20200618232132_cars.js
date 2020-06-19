exports.up = async function (knex) {
  // don't forget the return statement
  await knex.schema.createTable('car_dealer', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl.text('VIN', 128).unique().notNullable();
    // creates a numeric field called budget which is required
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.text('milage').notNullable();
    tbl.text('transmissionType');
    tbl.text('titlestatus');
  });
};

exports.down = async function (knex, Promise) {
  // drops the entire table
  await knex.schema.dropTableIfExists('car_dealer');
};
