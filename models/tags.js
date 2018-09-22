'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    name: DataTypes.TEXT
  }, {});
  Tags.associate = function(models) {
    // associations can be defined here
  };
  return Tags;
};