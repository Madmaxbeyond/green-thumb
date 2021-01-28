const Plant = require('../models/plant');

module.exports = {
    getAll,
    create,
    show,
    update,
    delete: deleteOne
};

async function getAll(req, res) {
    const plants = await Plant.find({
        user: req.user._id
    }); 
    res.status(200).json(plants);
}

async function create(req, res) {
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
}

async function show(req, res) {
    const plant = await Plant.findById(req.params.id);
    res.status(200).json(plant);
}

async function update(req, res) {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedPlant);
}

async function deleteOne(req, res) {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPlant);
}