const ModelNameModel = require("../Models/ModelName.model")


exports.get_list = (req , res)=>{

    ModelNameModel.find()
    .then((data)=>{
        res.send(data)
    })
}

exports.get_by_id = (req , res)=>{
    ModelNameModel.findOne({_id : req.params.ID})
    .then((data)=>{
        res.send(data)
    })
    .catch(err => res.status(501).send(err))
}

exports.add = (req , res)=>{
    var item =  new ModelNameModel(req.body);
    item.save()
    .then((data)=>{
        res.send(data)
    })
}



exports.update = (req , res)=>{
    
    ModelNameModel.updateOne({_id : req.params.ID} , req.body)
    .then((data)=>{
        res.send(data)
    })
    .catch(err => res.status(501).send(err))
}

exports.delete = (req , res)=>{
    ModelNameModel.deleteOne({_id : req.params.ID})
    .then((data)=>{
        res.send(data)
    })
    .catch(err => res.status(501).send(err))
}

exports.delete_list = (req , res)=>{

    ModelNameModel.deleteMany({_id : {$in : req.body.ids}})
    .then((data)=>{
        res.send(data)
    })
    .catch(err => res.status(501).send(err))
}