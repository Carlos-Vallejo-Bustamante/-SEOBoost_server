const { isValidObjectId } = require('mongoose');
const UserModel = require('../models/User.model');


const getAll = (req, res, next) => {
    UserModel
        .find()
        .then((users) => {
            res
                .status(200)
                .json({
                    results: users,
                });
        })
        .catch(next);
};
const getOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        UserModel
            .findById(id)
            .then((user) => {
                res.status(200).json(user);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};
const create = (req, res, next) => {
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
    console.log(req.body);
    UserModel
        .create({
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
        })
        .then(() => {
            res.sendStatus(201);
            res.json('all good here');
        })
        .catch(next);
};
const updateOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
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

        UserModel
            .findByIdAndUpdate(id, {
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
            }, { new: true })
            .then((user) => {
                res.json(user);
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};
const deleteOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        UserModel
            .findByIdAndDelete(id)
            .then(() => {
                res.json('Deleted');
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    updateOne,
    deleteOne,
};
