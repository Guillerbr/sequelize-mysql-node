'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});

  User.associate = function(models) {
    User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})  // associations can be defined here 1:1

    User.belongsToMany(models.WorkingDay, {through: 'UsersWorkingDays', foreignKey: 'userId', as: 'days'})  // associations can be defined here n:n
    
  };
  return User;
};