const { nanoid } = require('nanoid')

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    nanoId: {
      type: DataTypes.STRING(21),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Username is empty' },
        len: { args: [5, 35], msg: 'Incorrect username length' },
        notNull: {
          msg: 'Incorrect username'
        },
        is: { args: /^[a-z0-9_\-.]+$/i, msg: 'Incorrect username symbols used' }
      }
    }
  })

  User.beforeValidate(async (user, options) => {
    user.nanoId = nanoid()
  })

  return User
}
