const mongoose = require('mongoose');

const userRolesSchema = mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'roles',
      required: true,
    },
  },
  {
    timestamps: true,
});

userRolesSchema.index(
  {
    userId: 1,
    roleId: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model('userRoles',userRolesSchema);