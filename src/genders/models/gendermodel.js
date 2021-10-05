const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../connection')

class Gender extends Model {}

Gender.init({

      // Model attributes are defined here

  id_genero:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
  }, 

  nombre_genero:{
    type:Sequelize.STRING
  },

  imagen_genero: {
    type: Sequelize.STRING,
    allowNull: false
  },



  
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'generos' // We need to choose the model name
},
  {timestamps:false},
);

// `sequelize.define` also returns the model


module.exports = Gender 