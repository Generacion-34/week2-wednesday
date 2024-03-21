const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
  // Definimos las columnas aquí
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: true
  },

});

module.exports = User;


/**
 * !PASOS
 *? 1 - Defino el nombre de la variable, la primer letra en mayuscula y el nombre en singular
 *? 2 - Defino el nombre de la tabla, todo en minusculas y en singular
 *? 3- Defino las columnas
 */