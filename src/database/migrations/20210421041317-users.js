module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allouNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allouNull: false,
      unique: true,
    },
    password_hash: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allouNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allouNull: false,
    },
  }),
  down: async (queryInterface) => queryInterface.dropTable('users'),
};
