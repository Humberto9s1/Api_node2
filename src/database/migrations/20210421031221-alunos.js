module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
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
    sobrenome: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    idade: {
      type: Sequelize.INTEGER,
      allouNull: false,
    },
    peso: {
      type: Sequelize.FLOAT,
      allouNull: false,
    },
    altura: {
      type: Sequelize.FLOAT,
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
  down: async (queryInterface) => queryInterface.dropTable('alunos'),
};
