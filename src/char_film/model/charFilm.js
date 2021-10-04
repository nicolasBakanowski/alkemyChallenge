const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../connection')

class CharFilm extends Model {}

CharFilm.init({

      // Model attributes are defined here

  idpersonajes_filmaciones:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
  }, 
  id_filmacion: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  id_personaje: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
  
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'personajes_filmaciones' // We need to choose the model name
},
  {timestamps:false},
  
);

// `sequelize.define` also returns the model


module.exports = CharFilm 