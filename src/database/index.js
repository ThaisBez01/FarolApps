import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

const models = [ ];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conexao = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.conexao))
      .map(model => model.associate && model.associate(this.conexao.models));
  }
}

export default new Database();
