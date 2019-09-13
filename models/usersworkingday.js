'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersWorkingDay = sequelize.define('UsersWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {});
  UsersWorkingDay.associate = function(models) {
    // associations can be defined here
  };
  return UsersWorkingDay;
};