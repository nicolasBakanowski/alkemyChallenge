const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../connection')

class GenderFilm extends Model {}

GenderFilm.init({
      // Model attributes are defined here

  id_genero_filmacion:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
  }, 
  id_genero: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  id_filamcion: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
  
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'generos_filmaciones' // We need to choose the model name
},
  {timestamps:false},
);

// `sequelize.define` also returns the model


module.exports = GenderFilm 