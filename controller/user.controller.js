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

const updateOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        const {
            email,
            speciality,
            yearsOfExperience,
            name,
            lastName,
            linkedin,
            avatar,
            description,
            price
        } = req.body;

        UserModel
            .findByIdAndUpdate(id, {
                email,
                speciality,
                yearsOfExperience,
                name,
                lastName,
                linkedin,
                avatar,
                description,
                price
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

const removeFavorite = (req, res, next) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }

        const newData = req.body;

        console.log(newData);

        UserModel
            .findByIdAndUpdate(id, { $pull: { searches: newData } }, { new: true })
            .then((user) => {
                res.json(user);
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

const addFavorite = (req, res, next) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }

        const newData = req.body;

        UserModel
            .findByIdAndUpdate(id, { $addToSet: { searches: newData } }, { new: true })
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

const getAvatar = (req, res) => {
    try {
        if (!req.file) { throw new Error('Image is not presented!'); }
        console.log('AQUI RECIBE LA FOTO ============>', req.file);
        return res.json({ message: 'Huraaaay' });
    } catch (e) {
        return res.status(422).send({ message: e.message })
    }
};

module.exports = {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    addFavorite,
    removeFavorite,
    getAvatar
};
