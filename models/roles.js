const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
  { 
    timestamps: true,
    // toJSON: { virtuals: true }, 
    // toObject: { virtuals: true } 
  }
);
roleSchema.virtual("users", {
  ref: "userRoles",
  localField: "_id",
  foreignField: "roleId"
})

module.exports = mongoose.model('roles',roleSchema);