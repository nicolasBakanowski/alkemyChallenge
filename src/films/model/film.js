const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../connection')

class Film extends Model {}

Film.init({
  id_filmacion:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
  }, 
    // Model attributes are defined here
  titulo_filmacion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fechacreacion_filmacion: {
    type: Sequelize.DATEONLY                    
  },
  calificacion_filmacion: {
    type: Sequelize.DECIMAL
  },
  imagen_filmacion:{
    type: Sequelize.STRING    
  },
  
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'filmaciones' // We need to choose the model name
},
  {timestamps:false},
);



module.exports = Film 