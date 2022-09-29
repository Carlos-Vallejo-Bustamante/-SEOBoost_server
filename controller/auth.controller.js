const UserModel = require('../models/User.model');
const { signJwt } = require('../utils/jwt.util')
const bcrypt = require('bcryptjs')


const SignupController = (req, res, next) => {
    const {
        email,
        password,
        role,
        speciality,
        yearsOfExperience,
        name,
        lastName,
        linkedin,
        avatar,
        searches
    } = req.body;
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error('Email ya en uso');
            }
            return UserModel.create({
                email, password, role, speciality, yearsOfExperience, name, lastName, linkedin, avatar, searches
            });
        })
        .then(() => {
            res.sendStatus(201);
            res.json('all good here');
        })
        .catch((err) => {
            if (err.message === 'Email ya en uso') {
                res.status(400).json({ errorMessage: err.message });
                return;
            }
            next(err);
        });
};

const LoginController = (req, res, next) => {
    const { email, password } = req.body;

    UserModel.findOne({ email })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.email) });
            } else {
                res.status(400).json({ errorMessage: 'Email o contraseña no valida.' });
            }
        })
        .catch(next);
};


module.exports = {
    SignupController,
    LoginController
};
