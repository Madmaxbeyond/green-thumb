const Plant = require('../../models/plant');

module.exports = {
    getAll,
    create,
    show,
    update,
    delete: deleteOne
};

async function getAll(req, res) {
    console.log(req.user)
    const plants = await Plant.find({
       
    }); 
    res.status(200).json(plants);
}

async function create(req, res) {
    req.body.user = req.user._id; // User --< Plant
    const plant = await Plant.create(req.body);
    // console.log(plant);
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