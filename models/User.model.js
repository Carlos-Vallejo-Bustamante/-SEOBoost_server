const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const { ROLES, USER } = require('../const/user.const');
const SALT = +process.env.SALT;

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    role: { type: String, enum: ROLES, default: USER },
    speciality: { type: enum [String] },
    yearsOfExperience: { type: String, default: '' },
    name: { type: String, default: '' },
    lastName: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  if (this.isNew) {
    const genSalt = bcrypt.genSaltSync(SALT);
    const hashPassword = bcrypt.hashSync(this.password, genSalt);
    this.password = hashPassword;
  }
  next();
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const User = model("User", userSchema);

module.exports = User;
