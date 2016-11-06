
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({user_id:'tuser1', full_name:'Test User 1', password:'abc123'}),
        knex('users').insert({user_id:'tuser2', full_name:'Test User 2', password:'abc123'}),
        knex('users').insert({user_id:'tuser3', full_name:'Test User 3', password:'abc123'})
      ]);
    });
};
