const Engineer = require("../models/engineer");
const dataController = {};

dataController.index = async (req, res, next) => {
    try {
        res.locals.data.engineers = await Engineer.find({});
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

dataController.destroy = async (req, res, next) => {
    try {
        await Engineer.findOneAndDelete({ "_id": req.params.id })
        .then(() => {
            next();
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

dataController.update = async (req, res, next) => {
    try {
        req.body.available = req.body.available ? true : false
        res.locals.data.engineer = await Engineer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    req.body.available = req.body.available ? true : false
    try {
        res.locals.data.engineer = await Engineer.create(req.body);
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

dataController.show = async (req, res, next) => {
    try {
        res.locals.data.engineer = await Engineer.findById(req.params.id)
        if (!res.locals.data.engineer) {
            throw new Error(`No engineer with id ${req.params.id} in our database`)
        }
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController;