'use strict';
module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define('Authors', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    religion: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    age: DataTypes.INTEGER
  }, {});
  Authors.associate = function(models) {
    // associations can be defined here
  };
  return Authors;
};