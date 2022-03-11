const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Albert',
        email: 'Albert@gmail.com',
        password_hash: await bcryptjs.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Nikola',
        email: 'Nikola@gmail.com',
        password_hash: await bcryptjs.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Leonardo',
        email: 'Leonardo@gmail.com',
        password_hash: await bcryptjs.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  ),

  async down() {},
};
