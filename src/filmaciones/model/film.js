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
    type: DataTypes.STRING,
    allowNull: false
  },
  fechacreacion_filmacion: {
    type: Sequelize.DATEONLY                    
  },
  calificacion_filmacion: {
    type: Sequelize.DECIMAL
  },
  
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'filmaciones' // We need to choose the model name
},
  {timestamps:false},
);

// `sequelize.define` also returns the model
console.log(Film === sequelize.models.Film); // true



module.exports = Film 