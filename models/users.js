const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
     password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    }
    },
    { 
      timestamps: true,
      // toJSON: { virtuals: true },
      // toObject: { virtuals: true }
    }
);
userSchema.virtual("roles", {
  ref: "userRoles",
  localField: "_id",
  foreignField: "userId"
});

module.exports = mongoose.model('users',userSchema);