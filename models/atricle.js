'use strict';
module.exports = (sequelize, DataTypes) => {
  const Atricle = sequelize.define('Atricle', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    authorId: DataTypes.TEXT,
    tagId: DataTypes.TEXT
  }, {});
  Atricle.associate = function(models) {
    // associations can be defined here
  };
  return Atricle;
};