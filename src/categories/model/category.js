const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../connection')

class Gender extends Model {}

Gender.init({
  id_genero:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
  }, 
    // Model attributes are defined here
  nombre_genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen_genero: {
    type: Sequelize.STRING                   
  },
   
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'generos' // We need to choose the model name
},
  {timestamps:false},
);


module.exports = Gender 