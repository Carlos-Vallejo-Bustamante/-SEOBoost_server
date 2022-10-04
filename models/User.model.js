const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');
const { ROLES, USER } = require('../const/user.const');
const SALT = 10;

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    role: { type: String, enum: ROLES, default: USER },
    speciality: { type: String, enum: ['Copywriter', 'Analytics', 'Linkbuilder', 'SXO', 'ASO', 'SEM', ''], default: '' },
    yearsOfExperience: { type: String, default: '' },
    name: { type: String, default: '' },
    lastName: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    description: { type: String, default: '' },
    avatar: { type: String, default: '' },
    searches: [{ type: Object }],
    price: { type: String, default: '' }
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
