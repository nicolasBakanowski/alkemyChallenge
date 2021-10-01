const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../connection')

class User extends Model {}

User.init({
  idusuarios:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
  }, 
    // Model attributes are defined here
  email_usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password_usuario: {
    type: DataTypes.STRING
  },
  
}, //end first param for init

{     // Other model options go here
  sequelize: sequelize , // We need to pass the connection instance
  modelName: 'usuarios' // We need to choose the model name
},
  {timestamps:false},
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true



module.exports = User 