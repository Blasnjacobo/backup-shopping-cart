const { Perfume } = require("../models/perfumeSchema.js");

module.exports.getAllPerfumes = async (request, response) => {
    try {
        const perfumes = await Perfume.find();
        return response.status(200).json({
            count: perfumes.length,
            data: perfumes
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

module.exports.perfumeByID = async (request, response) => {
    try {
        const { _id } = request.params
        const perfume = await Perfume.findById(_id)
        return response.status(200).json(perfume)
    } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
    }
}
