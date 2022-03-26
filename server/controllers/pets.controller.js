const { modelName } = require("../models/pets.model")
const Pets = require("../models/pets.model")

module.exports.findAllPets = (req,res) =>{
    Pets.find()
        .then(allPets =>{
            res.json({results: allPets})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
}


module.exports.createPet = (req,res) =>{
    Pets.create(req.body)
        .then(newPet =>{
            res.json({results: newPet})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
}


module.exports.findOnePet = (req,res) =>{
    Pets.findOne({_id: req.params.id})
        .then(foundPet =>{
            res.json({results: foundPet})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))

}

module.exports.updateOnePet = (req,res)=>{
    Pets.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
            .then(updatedPet=>{
                res.json({results: updatedPet})
            })
            .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
    }


    module.exports.deletePet = (req,res)=>{
        Pets.deleteOne({_id: req.params.id})
            .then(deletedAuthor =>{
                res.json({results: deletedAuthor})
            })
            .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
    }