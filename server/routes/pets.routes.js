const PetController = require("../controllers/pets.controller")

module.exports = (app) =>{
    app.get('/api/Pets',PetController.findAllPets)
    app.post('/api/Pets', PetController.createPet)
    app.get('/api/Pets/:id', PetController.findOnePet)
    app.put('/api/Pets/:id', PetController.updateOnePet)
    app.delete('/api/Pets/:id', PetController.deletePet)
}